const decks = {
  memoriter: {
    label: "Érettségi summa 2",
    frontLabel: "Writer",
    backLabel: "Text",
    items: [
      {
        frontTitle: "Anakreón",
        frontText: "",
        backTitle: "Gyűlölöm azt…",
        backText: "Gyűlölöm azt, aki telt kupa mellett, bort iszogatván, háborút emleget és lélekölő viadalt. S kedvelem azt, aki bölcs és Aphrodité meg a Múzsák szép adományairól zengve szeretni tanít.",
      },
      {
        frontTitle: "Catullus",
        frontText: "",
        backTitle: "Gyűlölök és szeretek…",
        backText: "Gyűlölök és szeretek. Kérded tán, mért teszem én ezt, Nem tudom, érzem csak: szerteszakít ez a kín.",
      },
      {
        frontTitle: "Janus Pannonius",
        frontText: "",
        backTitle: "Pannónia dicsérete",
        backText: "Eddig Itália földjén termettek csak a könyvek, S most Pannónia is ontja a szép dalokat. Sokra becsülnek már, a hazám is büszke lehet rám, Szellemem egyre dicsőbb, s általa híres e föld!",
      },
      {
        frontTitle: "Csokonai Vitéz Mihály",
        frontText: "",
        backTitle: "Tartózkodó kérelem",
        backText: "A hatalmas szerelemnek Megemésztő tüze bánt. Te lehetsz írja sebemnek, Gyönyörű kis tulipánt! Szemeid szép ragyogása Eleven hajnali tűz, Ajakid harmatozása Sok ezer gondot elűz. Teljesítsd angyali szókkal, Szeretőd amire kért: Ezer ambrózia csókkal Fizetek válaszodért.",
      },
      {
        frontTitle: "Csokonai Vitéz Mihály",
        frontText: "",
        backTitle: "A Reményhez",
        backText: "Földiekkel játszó Égi tünemény, Istenségnek látszó Csalfa, vak remény! Kit teremt magának A boldogtalan, S mint véd angyalának Bokói untalan. Sima szíddal mit kecsegtetsz? Mert nem vetsz felém? Kétes kedvet miért csepegtetsz Májaid szelelm? Csak maradj magadnak! Bíztató vala; Hittem szép szavadnak. Mégis megcsala.",
      },
      {
        frontTitle: "Berzsenyi Dániel",
        frontText: "",
        backTitle: "A közelítő tél (1. strófa)",
        backText: "Hervad már ligetünk, s díszei hullanak, Tarlott bokrai közt sárga levél zörög. Nincs rózsás labyrinth, s balzsamos illatok Közt nem lengedez a Zephyr.",
      },
      {
        frontTitle: "Berzsenyi Dániel",
        frontText: "",
        backTitle: "A magyarokhoz I. (1. versszak)",
        backText: "Romlásnak indult hajdan erős magyar! Nem látod, Árpád vére miként fajúl? Nem látod a bosszús egeknek Ostorait nyomorúlt hazádon?",
      },
      {
        frontTitle: "Berzsenyi Dániel",
        frontText: "",
        backTitle: "Osztályrészem (1. strófa)",
        backText: "Partra szállottam. Levonom vitorlám. A szelek mérgét nemesen kiálltam. Sok Charybdis közt, sok ezer veszélyben Izzada orcám.",
      },
      {
        frontTitle: "Petőfi Sándor",
        frontText: "",
        backTitle: "Fa leszek, ha…",
        backText: "Fa leszek, ha fának vagy virága. Ha harmat vagy: én virág leszek. Harmat leszek, ha te napsugár vagy… Csak hogy lényink egyesüljenek. Ha, leányka, te vagy a mennyország: Akkor én csillaggá változom. Ha, leányka, te vagy a pokol: (hogy Egyesüljünk) én elkárhozom.",
      },
      {
        frontTitle: "Petőfi Sándor",
        frontText: "",
        backTitle: "A bánat? Egy nagy óceán",
        backText: "A bánat? egy nagy óceán. S az öröm? Az oceán kis gyöngye. Talán, Mire fölhozom, össze is töröm.",
      },
      {
        frontTitle: "Arany János",
        frontText: "",
        backTitle: "Toldi estéje (I/1, VI/28. strófa)",
        backText: "Őszbe csavarodott a természet feje, Dérré vált a harmat, hull a fák levele, Rövidebb, rövidebb lesz a napnak útja, És hosszúkat alszik rá, midőn megfutja. Megpihen legszélén az égi határnak S int az öregeknek: benneteket várlak! Megrezdül a feje sok öregnek erre: Egymásután mégis mennek a nyughelyre. Végső rendelkezést tennék: de hát minek? Nem igen van: miről. S ha volna sincs: kinek. Nem hagyok örököst… csak egy hű cselédet: Azt kötöm szivedre, meg a magyar népet. Szeresd a magyart, de ne faragd le, szóla, Erejét, formáját, durva kérgét róla: Mert mi haszna símább, ha jól megfaragják? Nehezebb eltörni a faragatlan fát.",
      },
      {
        frontTitle: "Ady Endre",
        frontText: "",
        backTitle: "Góg és Magóg…",
        backText: "Góg és Magóg fia vagyok én, Hiába döngetek kaput, falat S mégis megkérdem tőletek: Szabad-e sírni a Kárpátok alatt? Verecke híres útján jöttem én, Fülembe még ősmagyar dal rivall, Szabad-e Dévénynél betörnöm Új időknek új dalaival? Fülembe forró ólmot öntsetek, Legyek az új, az énekes Vazul, Ne halljam az élet új dalait, Tiporjatok reám durván, gazul. De addig sírva, kínban, mit se várva Mégiscsak száll új szárnyakon a dal S ha elátkozza százszor Pusztaszer, Mégis győztes, mégis új és magyar.",
      },
      {
        frontTitle: "Ady Endre",
        frontText: "",
        backTitle: "Kocsi-út az éjszakában",
        backText: "Milyen csonka ma a Hold, Az éj milyen sivatag, néma, Milyen szomorú vagyok én ma, Milyen csonka ma a Hold. Minden Egész eltörött, Minden láng csak részekben lobban, Minden szerelem darabokban, Minden Egész eltörött. Fut velem egy rossz szekér, Utána mintha jajszó szállna, Félig mély csönd és félig lárma, Fut velem egy rossz szekér.",
      },
      {
        frontTitle: "Babits Mihály",
        frontText: "",
        backTitle: "Jónás imája",
        backText: "Hozzám már hűtlen lettek a szavak, vagy én lettem mint túláradt patak oly tétova céltalan parttalan s ugy hordom régi sok hiú szavam mint a tévelygő ár az elszakadt sövényt jelzőkarókat gátakat. Óh bár adna a Gazda patakom sodrának medret, biztos útakon vinni tenger felé, bár verseim csúcskére Tőle volna szabva rim előre kész, s mely itt áll polcomon, szent Bibliája lenne verstanom, hogy ki mint Jónás, rest szolgája, hajdan bujkálva, később mint Jónás a Halban leszálltam a kínoknak eleven süket és forró sötétjébe, nem három napra, de három hóra, három évre vagy évszázadra, megtaláljam, mielőtt egy mégvakabb és örök Cethal szájában végkép eltünök, a régi hangot s, szavaim hibátlan hadsorba állván, mint Ő súgja, bátran szólhassak s mint rossz gégémből telik és ne fáradjak bele estelig vagy míg az égi és ninivei hatalmak engedik hogy beszéljek s meg ne haljak.",
      },
      {
        frontTitle: "Kányádi Sándor",
        frontText: "",
        backTitle: "Valaki jár a fák hegyén",
        backText: "valaki jár a fák hegyén ki gyújtja s oltja csillagod csak az nem fél kit a remény már végképp magára hagyott én félek még reménykedem ez a megtartó irgalom a gondviselő félelem kísért eddigi utamon valaki jár a fák hegyén vajon amikor zuhanok meggyújt-e akkor még az én tüzemnél egy új csillagot vagy engem is egyetlenegy sötétlő maggá összenyom s nem villantja föl lelkemet egy megszülető csillagon valaki jár a fák hegyén mondják úr minden porszemen mondják hogy maga a remény mondják maga a félelem",
      },
      {
        frontTitle: "Nagy László",
        frontText: "",
        backTitle: "Ki viszi át a Szerelmet",
        backText: "Létem ha végleg lemerült ki imád tücsök-hegedűt? Lángot ki lehel deres ágra? Ki feszül föl a szivárványra? Lágy hantu mezővé a szikla-csípőket ki öleli sírva? Ki becéz falban megeredt hajakat, verőereket? S dűlt hiteknek kicsoda állít káromkodásból katedrálist? Létem ha végleg lemerült, ki rettenti a keselyűt! S ki viszi át fogában tartva a Szerelmet a túlsó partra!",
      },
    ],
  },
  kotelezo: {
    label: "Érettségi summa 3",
    frontLabel: "Writer",
    backLabel: "Work",
    items: [
      {
        frontTitle: "Szophoklész",
        frontText: "Görög dráma",
        backTitle: "Antigoné",
        backText: "A Kr. e. 5. századi tragédia a thébai mondakörhöz kapcsolódik. Oidipuszt fiai, majd haláluk után Kreón követi a trónon. A középpontban Kreón és Antigoné konfliktusa áll, mert utóbbi megszegi a parancsot, az isteni törvényt követve eltemeti testvérét, Polüneikészt. Antigoné meghal, de erkölcsileg győz, Kreón pedig összeomlik, miután öngyilkos lesz fia, Haimón és felesége, Eurüdiké.",
      },
      {
        frontTitle: "Katona József",
        frontText: "Drámaíró",
        backTitle: "Bánk bán",
        backText: "A II. Endre uralkodása alatt, 1213-ban játszódó, 1815-ben íródott tragédia a nemzeti és az idegen érdekeket állítja szembe. Előbbi képviselője az ország nádora, Bánk bán, utóbbié Gertrudis. Bánk, akinek feleségét, Melindát magáévá teszi Gertrudis öccse, Ottó, végül megöli a királynét. Tettét a főurak elégedetlensége (Petúr, Simon, Mikhál) és Tiborc panasza is motiválja. Végül meghal Melinda is, Bánk összeroppan.",
      },
      {
        frontTitle: "Vörösmarty Mihály",
        frontText: "Romantika",
        backTitle: "Csongor és Tünde",
        backText: "Az alkotás a Tündétől elszakított Csongor útját rajzolja meg, aki jelképes 24 óra alatt végigjárja a világot a hármas úttól a hármas útig, Hajnal országától az Éj birodalmáig. A mű a boldogság titkát, az élet értelmét kutatja, s azt elsősorban a szerelemben leli meg; Tünde még az örök életről is lemond ezért. Ezt az értelmezést erősíti a Kalmár, a Fejedelem és a Tudós sorsa is.",
      },
      {
        frontTitle: "Jókai Mór",
        frontText: "Regényíró",
        backTitle: "Az aranyember",
        backText: "A mű az 1820-as évekbe, Komáromba visz. Tímár Mihály hiába lesz dúsgazdag, bűnvád gyötri. A boldogságot sem feleségénél, Tímeánál leli meg, hanem Noéminél a Senki szigetén. Az 1872-ben megjelent vallomásregény arról szól, hogy a gazdagság és a boldogság kizárja egymást.",
      },
      {
        frontTitle: "Tolsztoj",
        frontText: "Orosz próza",
        backTitle: "Iván Iljics halála",
        backText: "Az elbeszélés egy törvényszéki bíró, Iván Iljics halálát mutatja be. A magasrangú pétervári hivatalnok, aki korábban csak kényelmével és karrierjével törődött, halálos betegen rájön arra, hogy csupán a szeretet teheti értelmesebbé az életet, fontosabb jobbá lenni, mint jobban élni. Csak két ember sajnálja igazán: gimnazista fia és szolgája, Geraszim.",
      },
      {
        frontTitle: "Arany János",
        frontText: "Elbeszélő költészet",
        backTitle: "Toldi estéje",
        backText: "A halni készülő öreg Toldit 3 év után Budára hívják, hogy mentse meg a haza becsületét. Toldi legyőzi az olasz bajnokot, ám amikor az apródok gúnyolják, hármat megöl közülük. Röviddel ezután meghal, de előtte még kibékül Lajos királlyal. Találkozásuk azt sugallja, csak a nemzeti értékek megtartása hozhat fejlődést: „Szeresd a magyart, de ne faragd le – szóla, Erejét, formáját, durva kérgét róla.”",
      },
      {
        frontTitle: "Madách Imre",
        frontText: "Drámai költemény",
        backTitle: "Az ember tragédiája",
        backText: "A 15 színből álló drámai költemény konfliktusa az égben jön létre az Úr és Lucifer között. De itt a földön dől el: Ádám, aki Évával és Luciferrel megéli a történelmet, Éva anyaságának hatására az élet mellett dönt, így az Úr győz. A mű a jobbért való küzdelemben látja az élet értelmét, s e küzdelemben azt javasolja: hallgassunk a lelkiismeretünkre, a nőre, és merjünk kételkedni.",
      },
      {
        frontTitle: "Mikszáth Kálmán",
        frontText: "Regény",
        backTitle: "Beszterce ostroma",
        backText: "A társadalmi regény bírálja a továbbélő feudalizmust, de a polgárságot is. Pongrácz István Besztercére indul hadaival, mert oda szöktették a várúrnőt Estellát. Túszt kap cserébe, Apolkát, akit a lányaként szeret. Amikor látja: el fogják venni tőle, öngyilkos lesz.",
      },
      {
        frontTitle: "Herczeg Ferenc",
        frontText: "Történelmi regény",
        backTitle: "Az élet kapuja",
        backText: "Az 1513-ban Rómában játszódó kisregény két szálon fut: Bakócz Tamás érsek a pápai trónt szeretné megszerezni. Unokaöccse, Vértesi Tamás a szerelmi boldogságot. Mindketten csalódnak. A tanulság: az ország nem számíthat a Nyugatra, csak magára.",
      },
      {
        frontTitle: "Babits Mihály",
        frontText: "Bibliai modernség",
        backTitle: "Jónás könyve",
        backText: "A Bibliára épülő elbeszélő költeményben Jónás azt a feladatot kapja az Úrtól, hogy menjen Ninivébe, ahol „megáradt a gonoszság”. Ám ő „rühellé a prófétaságot”, másik hajóra száll. Vihar tör ki. Megtudják, hogy istene elől fut, a tengerbe dobják. Egy cethal gyomrában tölt három napot, ami ráébreszti: vállalnia kell a küldetést, mert „vétkesek közt cinkos, aki néma”. Ninivében 3 napon át hirdeti hasztalan: Isten 40 nap múlva megsemmisíti a várost, ha nem térnek meg. Az Úr végül mégis megkegyelmez Ninivének.",
      },
      {
        frontTitle: "Móricz Zsigmond",
        frontText: "Realista regény",
        backTitle: "Úri muri",
        backText: "Az 1928-as regény egy alföldi kisvárosban játszódik 1896-ban 4 nap alatt. Az expozícióban három nemest, Borbírót, Csörgheő Csulit és Szakhmáry Zoltánt ismerjük meg. Mulatozás mulatozást követ, amelynek tetőpontján a gazdasági és magánéleti válságba került Szakhmáry Zoltán felgyújtja tanyáját és mellbe lövi magát. A magyar Ugar, az ország elmaradottsága áll a középpontban.",
      },
      {
        frontTitle: "Wass Albert",
        frontText: "Regény",
        backTitle: "Adjátok vissza a hegyeimet!",
        backText: "Az 1949-ben Nyugton keletkezett mű egy korán árvaságra jutott fiú történetébe sűríti mindazt a rettenetet és eufóriát, amelyet a második világháború jelentett az erdélyi magyarok számára. A fiatal juhászbojtár és szénégető a visszatérő magyar világban embernek érzi magát. A világháború végének zűrzavarában azonban haramiának áll, később hősiesen védi Erdélyt. Végül nyugatra szökik, hogy beleordítsa a „szabad világ” fülébe Erdély irtózatos tragédiáját.",
      },
      {
        frontTitle: "Örkény István",
        frontText: "Groteszk",
        backTitle: "Tóték",
        backText: "Az 1967-es groteszk komédia a hatalom és az áldozat viszonyáról szól. A második világháborúban a fronton szolgáló Tót Gyula parancsnoka, Varró őrnagy a család mátraszentannai otthonában tölti kéthetes szabadságát. Pokollá téve a család életét: hajnalokig dobozolnak a kedvéért. A család nem, de a néző tudja, hiába, hiszen a fiú már elesett. Végül Tót az őrnagyot négy egyforma darabba vágja a margóvágóval.",
      },
      {
        frontTitle: "Szabó Magda",
        frontText: "20. századi regény",
        backTitle: "Az ajtó",
        backText: "Az 1989-es regény az elbeszélő, Magda és házvezetőnője, Szeredás Emerenc viszonyát helyezi a centrumba. Utóbbi titokzatos személyiség, senkit nem enged be lakásába, nemhívőként is a cselekvő szeretet képviselője. Bár Magda sokat megtud Emerencről, kapcsolatuk rejtélyes marad. Nem könnyű igazi, mély kapcsolatokat teremteni – erről szól a mű.",
      },
    ],
  },
  mufajok: {
    label: "Érettségi summa 4",
    frontLabel: "Term",
    backLabel: "Meaning",
    items: [
      {
        frontTitle: "Líra",
        frontText: "Műnem",
        backTitle: "Líra",
        backText: "A lírai műben egészen a 20. századig elsősorban érzelmek kifejezését látták. Ma már a didaktikus vagy reflexív szövegeket is ide soroljuk.",
      },
      {
        frontTitle: "Dal",
        frontText: "Lírai műfaj",
        backTitle: "Dal",
        backText: "Közvetlen élmény kifejtése röviden, dalstrófákban. Sok ismétlés, egységes felépítés és hangnem jellemzi. Példák: Alkaiosz: Bordal, Szapphó: Édesanyám, Csokonai: Tartózkodó kérelem, Petőfi: Reszket a bokor, mert…, Áprily: Március.",
      },
      {
        frontTitle: "Óda",
        frontText: "Lírai műfaj",
        backTitle: "Óda",
        backText: "Magasztos tárgyról írt ünnepélyes hangnemben írott mű. Megszólítottja személy, közösség vagy eszme. Példák: Horatius: Thaliarchushoz, Berzsenyi: A magyarokhoz, Vörösmarty: A merengőhöz, Liszt Ferenchez, József Attila: Óda, A Dunánál.",
      },
      {
        frontTitle: "Elégia",
        frontText: "Lírai műfaj",
        backTitle: "Elégia",
        backText: "Az eszmény elvesztése miatt érzett szomorúság hatja át. A fájdalom oka sok minden lehet: magány, elmúlás, búcsú, szerelmi bánat. Példák: Berzsenyi: A közelítő tél, Babits: Ősz és tavasz között.",
      },
      {
        frontTitle: "Ditirambus",
        frontText: "Lírai műfaj",
        backTitle: "Ditirambus",
        backText: "Az óda rokona, önkívületi lélekállapot jellemzi. Példa: Vörösmarty: A vén cigány.",
      },
      {
        frontTitle: "Francia vagy Villoni ballada",
        frontText: "Forma",
        backTitle: "Francia vagy Villoni ballada",
        backText: "3 nyolcsoros keresztrímes, jambikus versszakból és egy 4 soros ajánlásból áll. Van refrénje is. Példa: József Attila: Bérmunkás-ballada.",
      },
      {
        frontTitle: "Epigramma",
        frontText: "Lírai műfaj",
        backTitle: "Epigramma",
        backText: "Egy mélyreható gondolat rövid, szellemes kifejtése eredetileg disztichonban. Szerkezete: előkészítés és csattanó. Példák: Anakreon: Gyűlölöm, Catullus: Gyűlölök és szeretek, Kölcsey: Huszt, Kazinczy: A nagy titok.",
      },
      {
        frontTitle: "Himnusz",
        frontText: "Lírai műfaj",
        backTitle: "Himnusz",
        backText: "Fenséges tárgyról ünnepi hangnemben szóló vers. A beszélő Istenhez fordul, többnyire könyörög vagy dicsér. Szerkezete: ABA. Példák: Szapphó: Aphroditéhoz, Kölcsey: Himnusz.",
      },
      {
        frontTitle: "Ekloga",
        frontText: "Lírai műfaj",
        backTitle: "Ekloga",
        backText: "Eredetileg párbeszédes formájú hexameteres pásztoridill. Vergiliusnál már nincs idill, és elmaradhat a párbeszédes forma is. Példák: Vergilius: IX. ecloga, Radnóti Miklós: Hetedik ecloga.",
      },
      {
        frontTitle: "Episztola",
        frontText: "Lírai műfaj",
        backTitle: "Episztola",
        backText: "Verses költői levél, valóságos személyhez szól. Az ars poetica fő témája a költő feladata.",
      },
      {
        frontTitle: "Szonett",
        frontText: "Lírai forma",
        backTitle: "Szonett",
        backText: "14 jambikus sorból álló rendkívül szigorú versforma. Példa: Babits: A lírikus epilógja.",
      },
      {
        frontTitle: "Létösszegző vers",
        frontText: "Lírai típus",
        backTitle: "Létösszegző vers",
        backText: "A költő saját életútját vizsgálja. Fő kérdése: élt-e az élet nyújtotta lehetőségekkel. Gyakran jár együtt időszembesítéssel, önmegszólítással. Példák: Arany János: Epilógus, Kosztolányi: Boldog, szomorú dal, József Attila: Karóval jöttél.",
      },
      {
        frontTitle: "Önmegszólító vers",
        frontText: "Lírai típus",
        backTitle: "Önmegszólító vers",
        backText: "A jelenbeli, elemző én múltbéli önmagához, a cselekvő énhez beszél. Számon kéri a tetteket. Az új szerep gyakran önfelszólításként jelenik meg. Példák: Arany János: Mindvégig, József Attila: Karóval jöttél.",
      },
      {
        frontTitle: "Időszembesítő vers",
        frontText: "Lírai típus",
        backTitle: "Időszembesítő vers",
        backText: "Idősíkokat, értékeket szembesít, leggyakrabban értékes múltat és sivár jelent. Példák: Berzsenyi: A közelítő tél, Vörösmarty: Előszó, Arany János: Letészem a lantot.",
      },
      {
        frontTitle: "Epika",
        frontText: "Műnem",
        backTitle: "Epika",
        backText: "Az epika lényege az elbeszélés. Az elbeszélésben az elbeszélő elmond egy történetet a befogadónak. A történet fiktív vagy valós.",
      },
      {
        frontTitle: "Regény",
        frontText: "Epikai műfaj",
        backTitle: "Regény",
        backText: "Sokrétű műfaj, formája általában prózai, rendszerint nagy terjedelmű, a sokszereplős történet többnyire hosszú időt fog át. Példák: Kosztolányi: Édes Anna, Kertész Imre: Sorstalanság.",
      },
      {
        frontTitle: "Eposz",
        frontText: "Epikai műfaj",
        backTitle: "Eposz",
        backText: "Hősköltemény. Nagy terjedelmű, verses formájú, többnyire hexameterben íródott mű. Főhőse a kor emberideálja, akit istenek is támogatnak, és az egész közösségnek utat mutat. Példa: Zrínyi: Szigeti veszedelem.",
      },
      {
        frontTitle: "Elbeszélés",
        frontText: "Epikai műfaj",
        backTitle: "Elbeszélés",
        backText: "A regénynél rövidebb, a novellánál hosszabb epikus mű. Kevésbé komplex, mint a regény, poétikai sajátosságaiban azonban alig különbözik tőle. Példa: Tolsztoj: Iván Iljics halála.",
      },
      {
        frontTitle: "Novella",
        frontText: "Epikai műfaj",
        backTitle: "Novella",
        backText: "Rövid prózai mű kevés szereplővel. Összekapcsolja a jellemet a sorsfordulattal. A sorsfordulat megvilágítja a jellemet, a jellem magyarázza a sorsfordulatot. Példa: Kosztolányi: A kulcs.",
      },
      {
        frontTitle: "Mese",
        frontText: "Epikai műfaj",
        backTitle: "Mese",
        backText: "Legfőbb tartalmi eleme a csoda. Hőse leküzdi a nehézségeket; győz a jó, a mesei igazságszolgáltatás. Szereplői típusok. Mesei számok, fordulatok jellemzik.",
      },
      {
        frontTitle: "Monda",
        frontText: "Epikai műfaj",
        backTitle: "Monda",
        backText: "A mondában is van csoda, de igaz történetként adják elő. A monda támaszkodik egy hely vagy egy személy valóságára. Két fő típusa a történeti és a hiedelemmonda.",
      },
      {
        frontTitle: "Anekdota, adoma",
        frontText: "Epikai műfaj",
        backTitle: "Anekdota, adoma",
        backText: "Egy ismert emberről mond el egy történetet humorosan, csattanóval. Az adoma hasonlít hozzá, de nem valóságos személyeket, hanem típusokat mutat be.",
      },
      {
        frontTitle: "Legenda",
        frontText: "Epikai műfaj",
        backTitle: "Legenda",
        backText: "Többnyire egy szent példaadó életéről szól. Fő elemei a csodatételek és a szent erényeinek felsorolása. Példa: Margit-legenda.",
      },
      {
        frontTitle: "Ballada, románc",
        frontText: "Epikai műfaj",
        backTitle: "Ballada, románc",
        backText: "A ballada cselekménye sűrített, kihagyásos, sok párbeszéd jellemzi. Az elbeszélés szaggatott, feszült, rejtélyes, többnyire tragikus. A románc kevésbé drámai: inkább érzelmes, elégikus. Példák: Arany: A walesi bárdok, Egyszer egy királyfi, Mátyás anyja.",
      },
      {
        frontTitle: "Önéletrajz, vallomás",
        frontText: "Epikai műfaj",
        backTitle: "Önéletrajz, vallomás",
        backText: "Mindkettő az élet fiktív újrateremtése. A vallomás az önéletrajz szubjektívebb változata. Szent Ágoston teremtette meg. Ma is izgalmas műfaj, mivel az ember ellentmondó szerepek egyvelege.",
      },
      {
        frontTitle: "Példázat, parabola",
        frontText: "Epikai műfaj",
        backTitle: "Példázat, parabola",
        backText: "Egy mély igazságot világít meg egy rövid történet segítségével. A parabola is többértelműbb, mint a példázat. Példák: Az irgalmas szamaritánus, Kafka: Add föl.",
      },
      {
        frontTitle: "Dráma",
        frontText: "Műnem",
        backTitle: "Dráma",
        backText: "A „cselekedni” jelentésű ógörög szóból származik. Előadásra szánt műfajok tartoznak e műnemhez.",
      },
      {
        frontTitle: "Tragédia",
        frontText: "Drámai műfaj",
        backTitle: "Tragédia",
        backText: "A tragikum esztétikai minősége jellemzi. Ez többnyire a tragikus hős halálát jelenti, aki élete árán is kiáll a jó ügy mellett. Így vívja ki a néző csodálatát. Ugyanakkor nem hibátlan, ezért érzünk részvétet iránta. Híres tragédiák: Szophoklész: Antigoné, Shakespeare: Rómeó és Júlia, Hamlet.",
      },
      {
        frontTitle: "Komédia",
        frontText: "Drámai műfaj",
        backTitle: "Komédia",
        backText: "Fő sajátossága a komikum esztétikai minősége, melynek forrása az értékhiány. Három alaptípusát különböztetjük meg, amelyek többnyire vegyülnek egymással: karakterkomédia, helyzetkomédia, társadalmi komédia. Példák: Molière: Úrhatnám polgár, Shakespeare: Tévedések vígjátéka, Arisztophanész: Lüszisztraté.",
      },
      {
        frontTitle: "Középfajú dráma vagy színmű",
        frontText: "Drámai műfaj",
        backTitle: "Középfajú dráma vagy színmű",
        backText: "Komoly mondanivalót hordoz, tragikus vonásai is vannak, ám a konfliktus a hős elbukása nélkül oldódik meg. Hangulata változatos, a részletekben sokszor komikum is felfedezhető. Példák: Lessing: A bölcs Náthán, Molnár Ferenc: Doktor úr.",
      },
      {
        frontTitle: "Tragikomédia",
        frontText: "Drámai műfaj",
        backTitle: "Tragikomédia",
        backText: "A tragikomédia tragikus és komikus elemeket is tartalmaz, ám ezek a színművel szemben gyakorta elválaszthatatlanok egymástól. Tragikomédia Molière több műve is, például a Tartuffe.",
      },
      {
        frontTitle: "Zárt és nyitott dráma",
        frontText: "Drámaszerkezet",
        backTitle: "Zárt és nyitott dráma",
        backText: "A zárt dráma azt sugallja: a világ rendezett, áttekinthető, a szereplők tettei egyértelműen megítélhetők. Hármas egység és gondosan megformált nyelv jellemzi. A romantikában megjelenő nyitott dráma csupán részleteket képes bemutatni az áttekinthetetlenné lett világból. Példák: Szophoklész: Antigoné, Schiller: A haramiák, Katona József: Bánk bán.",
      },
      {
        frontTitle: "Céldráma és analitikus dráma",
        frontText: "Drámaépítés",
        backTitle: "Céldráma és analitikus dráma",
        backText: "A céldrámában az eseménysor egy jövőben bekövetkező mozzanatra irányul. Az analitikus drámában a cselekmény lényege a múlt feltárulásának folyamata. Példák: Szophoklész: Antigoné, Oidipusz király, Ibsen: Nóra.",
      },
    ],
  },
};

const state = {
  currentDeck: "memoriter",
  currentIndex: 0,
  flipped: false,
  deckSettings: Object.fromEntries(
    Object.entries(decks).map(([deckKey, deck]) => [
      deckKey,
      {
        items: [...deck.items],
        showBackFirst: false,
        reviewActive: false,
        reviewQueue: [...deck.items],
        reviewWrong: [],
      },
    ]),
  ),
};

const dragState = {
  active: false,
  pointerId: null,
  startX: 0,
  deltaX: 0,
  suppressClick: false,
};

const DRAG_THRESHOLD = 120;
const DRAG_ROTATION_DIVISOR = 24;

const deckName = document.querySelector("#deck-name");
const position = document.querySelector("#position");
const panel = document.querySelector("#study-panel");
const frontEyebrow = document.querySelector("#front-eyebrow");
const frontTitle = document.querySelector("#front-title");
const frontText = document.querySelector("#front-text");
const backEyebrow = document.querySelector("#back-eyebrow");
const backTitle = document.querySelector("#back-title");
const backText = document.querySelector("#back-text");
const flipButton = document.querySelector("#flip-btn");
const prevButton = document.querySelector("#prev-btn");
const nextButton = document.querySelector("#next-btn");
const shuffleButton = document.querySelector("#shuffle-btn");
const viewToggleButton = document.querySelector("#view-toggle-btn");
const reviewModeButton = document.querySelector("#review-mode-btn");
const resetReviewButton = document.querySelector("#reset-review-btn");
const deckButtons = [...document.querySelectorAll(".deck-toggle")];

function getDeckSettings(deckKey = state.currentDeck) {
  return state.deckSettings[deckKey];
}

function getDeckItems(deckKey = state.currentDeck) {
  return getDeckSettings(deckKey).items;
}

function getVisibleItems(deckKey = state.currentDeck) {
  const settings = getDeckSettings(deckKey);

  return settings.reviewActive ? settings.reviewQueue : settings.items;
}

function resetDeckReview(deckKey = state.currentDeck, keepActive = getDeckSettings(deckKey).reviewActive) {
  const settings = getDeckSettings(deckKey);

  settings.reviewActive = keepActive;
  settings.reviewQueue = [...settings.items];
  settings.reviewWrong = [];

  if (deckKey === state.currentDeck) {
    state.currentIndex = 0;
  }
}

function syncDeckView() {
  state.flipped = getDeckSettings().showBackFirst;
}

function setPanelDrag(deltaX = 0) {
  panel.style.setProperty("--drag-x", `${deltaX}px`);
  panel.style.setProperty("--drag-rotate", `${deltaX / DRAG_ROTATION_DIVISOR}deg`);

  if (deltaX > 24) {
    panel.dataset.dragDirection = "right";
    return;
  }

  if (deltaX < -24) {
    panel.dataset.dragDirection = "left";
    return;
  }

  panel.dataset.dragDirection = "neutral";
}

function resetPanelDrag() {
  dragState.active = false;
  dragState.pointerId = null;
  dragState.startX = 0;
  dragState.deltaX = 0;
  panel.classList.remove("is-dragging");
  setPanelDrag(0);
}

function toggleReviewMode() {
  const settings = getDeckSettings();
  const nextActive = !settings.reviewActive;

  resetDeckReview(state.currentDeck, nextActive);
  syncDeckView();
  resetPanelDrag();
  render();
}

function resetReviewMode() {
  resetDeckReview();
  syncDeckView();
  resetPanelDrag();
  render();
}

function gradeCurrentCard(isRight) {
  const settings = getDeckSettings();

  if (!settings.reviewActive) {
    return;
  }

  const visibleItems = getVisibleItems();

  if (!visibleItems.length) {
    return;
  }

  const [currentItem] = visibleItems.splice(state.currentIndex, 1);

  if (!isRight) {
    settings.reviewWrong.push(currentItem);
  }

  if (!visibleItems.length) {
    if (settings.reviewWrong.length) {
      settings.reviewQueue = [...settings.reviewWrong];
      settings.reviewWrong = [];
      state.currentIndex = 0;
    } else {
      resetDeckReview(state.currentDeck, false);
    }
  } else if (state.currentIndex >= visibleItems.length) {
    state.currentIndex = 0;
  }

  syncDeckView();
  resetPanelDrag();
  render();
}

function shuffleCurrentDeck() {
  const settings = getDeckSettings();

  for (let index = settings.items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [settings.items[index], settings.items[swapIndex]] = [settings.items[swapIndex], settings.items[index]];
  }

  state.currentIndex = 0;
  resetDeckReview(state.currentDeck, settings.reviewActive);
  syncDeckView();
  render();
}

function toggleDeckView() {
  const settings = getDeckSettings();

  settings.showBackFirst = !settings.showBackFirst;
  syncDeckView();
  render();
}

function render() {
  const deck = decks[state.currentDeck];
  const deckSettings = getDeckSettings();
  const visibleItems = getVisibleItems();
  const safeIndex = visibleItems.length ? Math.min(state.currentIndex, visibleItems.length - 1) : 0;
  const item = visibleItems[safeIndex];

  state.currentIndex = safeIndex;

  deckName.textContent = deck.label;
  position.textContent = `${visibleItems.length ? state.currentIndex + 1 : 0} / ${visibleItems.length}`;

  frontEyebrow.textContent = deck.frontLabel;
  frontTitle.textContent = item.frontTitle;
  frontText.textContent = item.frontText;
  frontText.hidden = !item.frontText;

  backEyebrow.textContent = deck.backLabel;
  backTitle.textContent = item.backTitle;
  backText.textContent = item.backText;
  backText.hidden = !item.backText;

  panel.dataset.flipped = String(state.flipped);
  panel.dataset.reviewActive = String(deckSettings.reviewActive);
  flipButton.textContent = state.flipped ? "Front" : "Flip";
  viewToggleButton.textContent = deckSettings.showBackFirst ? "Front First" : "Back First";
  reviewModeButton.textContent = deckSettings.reviewActive ? "Stop Review" : "Review Mode";

  deckButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.deck === state.currentDeck);
  });
}

function setDeck(deckKey) {
  state.currentDeck = deckKey;
  state.currentIndex = 0;
  syncDeckView();
  render();
}

function move(step) {
  const items = getVisibleItems();
  state.currentIndex = (state.currentIndex + step + items.length) % items.length;
  syncDeckView();
  render();
}

function flip() {
  state.flipped = !state.flipped;
  render();
}

panel.addEventListener("pointerdown", (event) => {
  if (!getDeckSettings().reviewActive) {
    return;
  }

  dragState.active = true;
  dragState.pointerId = event.pointerId;
  dragState.startX = event.clientX;
  dragState.deltaX = 0;
  panel.classList.add("is-dragging");
  panel.setPointerCapture(event.pointerId);
});

panel.addEventListener("pointermove", (event) => {
  if (!dragState.active || dragState.pointerId !== event.pointerId) {
    return;
  }

  dragState.deltaX = event.clientX - dragState.startX;
  setPanelDrag(dragState.deltaX);
});

panel.addEventListener("pointerup", (event) => {
  if (!dragState.active || dragState.pointerId !== event.pointerId) {
    return;
  }

  const deltaX = dragState.deltaX;

  if (panel.hasPointerCapture(event.pointerId)) {
    panel.releasePointerCapture(event.pointerId);
  }

  if (Math.abs(deltaX) >= DRAG_THRESHOLD) {
    dragState.suppressClick = true;
    gradeCurrentCard(deltaX > 0);
    return;
  }

  resetPanelDrag();
});

panel.addEventListener("pointercancel", () => {
  resetPanelDrag();
});

panel.addEventListener("click", (event) => {
  if (dragState.suppressClick) {
    dragState.suppressClick = false;
    event.preventDefault();
    return;
  }

  flip();
});

flipButton.addEventListener("click", flip);
prevButton.addEventListener("click", () => move(-1));
nextButton.addEventListener("click", () => move(1));
shuffleButton.addEventListener("click", shuffleCurrentDeck);
viewToggleButton.addEventListener("click", toggleDeckView);
reviewModeButton.addEventListener("click", toggleReviewMode);
resetReviewButton.addEventListener("click", resetReviewMode);

deckButtons.forEach((button) => {
  button.addEventListener("click", () => setDeck(button.dataset.deck));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    move(-1);
  }

  if (event.key === "ArrowRight") {
    move(1);
  }

  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    flip();
  }
});

render();