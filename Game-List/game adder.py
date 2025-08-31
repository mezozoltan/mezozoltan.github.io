import os
import re
import json5
import shutil
from copy import deepcopy

# ---------- Helpers ----------
def script_dir():
    return os.path.dirname(os.path.abspath(__file__))

def strip_js_wrapper(text: str) -> str:
    text = text.lstrip("\ufeff")
    text = re.sub(r"^\s*(?:const|let|var)\s+\w+\s*=\s*", "", text, flags=re.DOTALL)
    text = re.sub(r";\s*$", "", text, flags=re.DOTALL)
    return text

def load_js_array(path: str):
    with open(path, "r", encoding="utf-8") as f:
        raw = f.read()
    arr_text = strip_js_wrapper(raw)
    return json5.loads(arr_text)

# ---------- Custom JS serializer ----------
def js_value(v):
    if isinstance(v, str):
        return f"\"{v}\""
    elif isinstance(v, bool):
        return "true" if v else "false"
    elif v is None:
        return "null"
    elif isinstance(v, (int, float)):
        return str(v)
    elif isinstance(v, dict):
        items = [f"{k}: {js_value(val)}" for k, val in v.items()]
        return "{ " + ", ".join(items) + " }"
    elif isinstance(v, list):
        return "[ " + ", ".join(js_value(x) for x in v) + " ]"
    else:
        raise TypeError(f"Unsupported type: {type(v)}")

def format_game(game, indent="  "):
    lines = ["{"]
    for k, v in game.items():
        if k == "tags" and isinstance(v, list):
            lines.append(f"{indent}{k}: [")
            for tag in v:
                lines.append(f"{indent}  {js_value(tag)},")
            lines.append(f"{indent}],")
        else:
            lines.append(f"{indent}{k}: {js_value(v)},")
    lines.append("}")
    return "\n".join(lines)

def save_games_js(path: str, data):
    with open(path, "w", encoding="utf-8") as f:
        f.write("const games = [\n")
        for i, g in enumerate(data):
            formatted = format_game(g, indent="  ").splitlines()
            # add comma to closing brace unless it's the last item
            if i < len(data) - 1:
                formatted[-1] = formatted[-1] + ","
            for line in formatted:
                f.write("  " + line + "\n")
        f.write("];\n")

# ---------- Rank logic ----------
def max_rank_for_tag(games, tag_name):
    mx = 0
    for g in games:
        for t in g.get("tags", []):
            if t.get("name") == tag_name and isinstance(t.get("rank"), (int, float)):
                mx = max(mx, int(t["rank"]))
    return mx

def insert_with_rank_shift(games, new_game):
    new_game = deepcopy(new_game)
    for t in new_game.get("tags", []):
        name = t.get("name")
        nr = t.get("rank")
        if name is None or nr is None:
            continue
        mx = max_rank_for_tag(games, name)
        nr = int(nr)
        if nr < 1:
            nr = 1
        if nr > mx + 1:
            nr = mx + 1
        # shift
        for g in games:
            for tg in g.get("tags", []):
                if tg.get("name") == name and isinstance(tg.get("rank"), (int, float)) and int(tg["rank"]) >= nr:
                    tg["rank"] = int(tg["rank"]) + 1
        t["rank"] = nr
    games.append(new_game)

# ---------- Main ----------
def main():
    base = script_dir()
    games_path = os.path.join(base, "games.js")
    new_path = os.path.join(base, "new.js")

    games = load_js_array(games_path)
    new_games = load_js_array(new_path)

    for ng in new_games:
        insert_with_rank_shift(games, ng)

    save_games_js(games_path, games)

    print(f"Updated {games_path}")

if __name__ == "__main__":
    main()
