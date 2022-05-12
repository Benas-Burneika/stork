import { css } from "@emotion/css";
import PropTypes from "prop-types";
import { modalParagraph, modalParagraphAuthor } from "../../config";

function Gandras({mainColor}) {
  const importantColor = css`
    color: ${mainColor};
  `;
  return (
    <div>
      <p className={modalParagraphAuthor}>
      Marius Čepulis, gamtos fotografas
      </p>
      <br />
      <p className={modalParagraph}>
      „Tokia pavadinimų įvairove joks kitas sparnuotis negali pasidžiaugti : <span className={importantColor}>busilas, starkas, starkus, gužas, gužutis, bacionas, garnys, bacėnas, didutis</span>. O kiek visokių mitų, legendų ir pasakojimų apie jį pripilta. Kad neša vaikus, tai čia viskas aišku – per Joninės prisidavėt ir natūralu, kad po 9 mėnesių per Gandrines gandrai prie jūsų namo pasirodė. 
      </p>
      <br />
      <p className={modalParagraph}>
      Bet, žinoma, gandras lietuviui visada buvo <span className={importantColor}>laimės simbolis</span>. Žmonės tikėjo, kad jis neš laimę, jei tik įsikurs sodyboje (ir nelaimę, jei paliks lizdą). Tikėjo, kad jei pavasarį pamatai pirma skrendantį gandrą – ištekėsi, tupintį – liksi tupėti. Ir kūlio verstis būtinai reikia gandrą pamačius. Tiesa, nežinau kam, – gal tiesiog fizinis aktyvumas sveika? 
      </p>
      <br />
      <p className={modalParagraph}>
      Baltasis gandras tikrai nėra vien mūsų nacionalinis paukštis. Jis labai gerbiamas ir Vokietijoje, Lenkijoje, Baltarusijoje, Ukrainoje, Armėnijoje.
      </p>
      <br />
      <p className={modalParagraph}>
      Ir pas latvius be jo niekada neateitų pavasaris, nes mūsų nacionalinis paukštis ant uodegos atneša brolių latvių nacionalinį paukštį – <span className={importantColor}>baltąją kielę</span>, kad ši ledus baigtų išspardyti (matot, net paukščiai vienas kitam padeda, o ne konkuruoja).“
      </p>
      <br />
      <br />
      <br />
      <p className={modalParagraphAuthor}>
      Pilną straipsnį skaitykite LRT tinklalapyje:
        <a href="https://www.lrt.lt/naujienos/gyvenimas/13/916126/marius-cepulis-kodel-lietuviskas-gandras-atnesa-pavasari-latvijon-komentaras" target="_blank" rel="noopener noreferrer" > <span className={importantColor}>Marius Čepulis. Kodėl lietuviškas gandras atneša pavasarį Latvijon?</span></a> 
      </p>
    </div>
  );
}

Gandras.propTypes = {
  mainColor: PropTypes.string.isRequired
}

export default Gandras;
