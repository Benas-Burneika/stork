import { modalParagraph, modalParagraphAuthor } from "../../config";

function Varna() {
  return (
    <div>
      <p className={modalParagraphAuthor}>
      Marius Čepulis, gamtos fotografas
      </p>
      <br />
      <p className={modalParagraph}>
      „Kažkada tai buvo labai mylimas ir gerbiamas paukštis, kuris tapo vienu nekenčiamiausių sparnuočių. Dabar jis baigiamas išnaikinti ir dar po keleto metų trauksim jį į Raudonąją knygą.
      </p>
      <br/>
      <p className={modalParagraph}>
      Pagal tradicinį žmonių suvokimą, paukštis turi būti baltas ir plaukiot prūde arba nematomas gražiai giedot krūme. Jei paukštis neišvaizdus, krunkia, rėkia ir drįsta viešai tuštintis – jį reikia naikinti.
      </p>
      <br />
      <p className={modalParagraph}>
      Kovai dažniausiai klaidingai vadinami varnomis. Jie skiriasi nuo jų kūno forma, snapas ilgesnis ir ryškiai matosi plikas šviesus jo pagrindas, taip pat kovas turi pūstas „kelnes“. Jei didelis juodas paukštis šviesiu snapu maklinėja po jūsų kiemą – kovas.
      </p>
      <br />
      <p className={modalParagraph}>
      Kovų balsas kiek kitoks pratisas – khraa. Ir tai vieninteliai mūsų varniniai, kurie peri didelėmis kolonijomis (dėl ko žmonėms ir nepatinka). Anksčiau kovai išskrisdavo į šiltesnius kraštus, dabar nemaža dalis žiemoja.“
      </p>
      <br />
      <br />
      <br />
      <p className={modalParagraphAuthor}>
      Pilną straipsnį skaitykite LRT tinklalapyje:
        <a href="https://www.lrt.lt/naujienos/gyvenimas/13/1118344/marius-cepulis-apie-varnas" target="_blank" rel="noopener noreferrer" > Marius Čepulis. Apie varnas</a> 
      </p>
    </div>
  );
}

export default Varna;
