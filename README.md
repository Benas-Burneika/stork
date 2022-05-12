# Bakalauro baigiamasis darbas

## Nuoroda į projektą:
https://benas-burneika.github.io/stork/

## Apie projektą

Projekto tikslas - pritaikyti triangulizuotus paukščių paveikslėlius parodos tipo tinklalapyje.

Baigiamojo darbo tyrimo metu buvo pasirinktos ir išnagrinėtos penkios skirtingos trianguliacijos programos deviniom paukščių fotografijom. Kiekviena iš šių programų taiko Delaunay trianguliacijos metodą, tačiau viršūnių išgavimas, spalvinimas, rezultato eksportavimo galimybės, programos patogumas skyrėsi.

Prieš atliekant tyrimą iškėliau 7 vertinimo kriterijus, kuriais galėjau pasirinkti tinkamiausią programą tolimesniam darbui su būsimu parodos tipo tinklalapiu.

1. Generavimo laikas – per kiek laiko programa sugeneruoja paprastą fotografiją į triangulizuotą variantą.

2. Taškų skaičius – kiek viršūnių taškų programa naudoja norint išgauti trikampius ir galutinį rezultatą.

3. Trikampių skaičius – kiek galutinis rezultatas turi trikampių. Šis kriterijus itin svarbus, nes esant mažesniam skaičiui trikampių programa veikia greičiau. Taip pat, remiantis „Arm Ltd.“ dokumentacija apie žaidimus pabrėžta, kad modeliai mobiliuosiuose telefonuose neturėtų viršyti 535 viršūnių skaičiaus dėl geresnio veikimo. Šiame darbe buvo kuriamas internetinis puslapis, tad ši taisyklė nebuvo itin griežta, tačiau tai buvo siekiamybė.

4. Ar išlaikytas objekto organiškumas – triangulizuojant fotografiją dažnai kraštinės išsikraipo ir deformuoja bendrą figūros siluetą. Toks deformavimasis sugadina objekto organiškumą ir bendrą estetinį vaizdą.

5. Ar išlaikytas spalvų gradientas – šiame žingsnyje atkreipiamas dėmesys į spalvų vienodumą tarp šalia esančių trikampių. Ar trikampiai dera vienas šalia kito, ar nėra kardinaliai skirtingų spalvų šalia kur jų neturėtų būti.

6. Estetinis vaizdas – kaip galutinį rezultatą įvertinu savo akims ir ar šis modelis būtų pritaikomas internetinėje svetainėje. Didžiausias dėmesys skiriamas viršūnių ir trikampių skaičiui, spalvų vienodumui, silueto organiškumo išlaikymui.

7. Eksportavimo galimybės – kadangi gauti modeliai bus taikomi internetiniame puslapyje svarbus ir jų pritaikymas programuojant. Turint SVG modelį galima pasiekti daug geresnių rezultatų lengviau nei turint tik PNG. Naudojant SVG modelį galime visą objektą perpiešti, animuoti ar kitaip manipuliuoti pavieniais trikampiais.

### Atlikęs tyrimą padariau išvadą, kad:

Tarp visų programų labiausiai išsiskyrė „Triangula“ programa. Ši programa visais įvestais atvejais sugebėjo sėkmingai išspręsti pateiktas užduotis. Pilna programos versija (kuri taip pat yra ir nemokama) suteikia galimybė išsieksportuoti modelį SVG formatu kas palengvina programavimo darbą. Taip pat ši programa toleruoja didesnį kiekį smulkių detalių, nes objektus supaprastina. Dėl to mano baigiamojo darbo užduočiai spręsti, ši programa tapo pačia tinkamiausia.
