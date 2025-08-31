import os
from PIL import Image
import shutil

# Paths
source_folder = r"C:\Users\User\Desktop\Games\Game-Images\pngs"
destination_folder = r"C:\Users\User\Desktop\Games\Game-Images"

# Create destination folder if it doesn't exist
if not os.path.exists(destination_folder):
    os.makedirs(destination_folder)

# Loop through all PNG files
for filename in os.listdir(source_folder):
    if filename.lower().endswith(".png"):
        png_path = os.path.join(source_folder, filename)
        
        # New file name with .webp extension
        webp_filename = os.path.splitext(filename)[0] + ".webp"
        webp_path = os.path.join(destination_folder, webp_filename)
        
        # Convert and save as webp
        with Image.open(png_path) as img:
            img = img.convert("RGBA")  # Ensure correct mode
            img.save(webp_path, "WEBP", quality=95, method=6)  # High quality lossy

        # OPTIONAL: Remove original PNG after conversion
        # os.remove(png_path)

        print(f"Converted: {filename} → {webp_filename}")

print("✅ Conversion complete.")
