import { css } from "@emotion/css";
import PropTypes from "prop-types";
import { modalParagraph } from "../../config";

function Kalakutas({mainColor}) {
  const importantColor = css`
    color: ${mainColor};
  `;
  return (
    <div>
      <br />
      <p className={modalParagraph}>
      Kalakuto pavadinimai daugelyje kalbų reiškia vis skirtingas geografines vietas; pvz., angl. turkey, turk. hindi, portug. peru. Lietuviškas paukščio vardas kilęs nuo <span className={importantColor}>Kalikuto uosto</span>. Spėjama, kad tokia painiava kilo dėl to, kad šis paukštis buvo supainiotas su giminingu paukščiu patarška. Prekybą šiais paukščiais daugiausia kontroliavo Osmanai (Turkija), o tie paukščiai gabenti iš Madagaskaro. Indijos pavadinimas su gyvūnu susijęs greičiausiai dėl Amerikos laikymo Azijos (Indijos) dalimi.
      </p>
      <br/>
      <p className={modalParagraph}>
      Kalakutai yra <span className={importantColor}>didžiausi naminiai paukščiai</span>. Kojos ilgos, uodega plati, sparnai trumpi, ant galvos ir kaklo – odos išaugos. Plunksnos tankios. 
      </p>
      <br />
      <p className={modalParagraph}>
      Lietuvoje kalakutai <span className={importantColor}>iš pradžių buvo laikomi tik dvaruose</span>, vėliau juos pradėjo auginti ir valstiečiai. Buvo auginami vietiniai (maži, menko produktyvumo) kalakutai. Kalakutės naudotos viščiukams ir kitiems naminiams paukščiams perinti. Nuo 1937 pradėta auginti bronzinius plačiakrūtinius kalakutus, įsteigta jų veislinių ūkių.
      </p>
      <br />
    </div>
  );
}

Kalakutas.propTypes = {
  mainColor: PropTypes.string.isRequired
}

export default Kalakutas;
