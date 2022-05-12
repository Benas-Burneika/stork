import { css } from '@emotion/css';
import { PropTypes } from 'prop-types';

// Helpers
import { modalParagraph } from '../../config';

function ApieProjekta({setCurrentView}) {

  const paragraphContainer = css`
    margin-top: 50px;
  `;

  return (
    <div className={paragraphContainer}>
       <p className={modalParagraph}>
       Projekto tikslas - pritaikyti triangulizuotus paukščių paveikslėlius parodos tipo tinklalapyje.
      </p>
      <br />
      <p className={modalParagraph}>
      Baigiamojo darbo tyrimo metu buvo pasirinktos ir išnagrinėtos penkios skirtingos trianguliacijos programos deviniom paukščių fotografijom. Kiekviena iš šių programų taiko Delaunay trianguliacijos metodą, tačiau viršūnių išgavimas, spalvinimas, rezultato eksportavimo galimybės, programos patogumas skyrėsi.
      </p>
      <br />
      <p className={modalParagraph}>
      Prieš atliekant tyrimą iškėliau 7 vertinimo kriterijus, kuriais galėjau pasirinkti tinkamiausią programą tolimesniam darbui su būsimu parodos tipo tinklalapiu.
      </p>
      <br />
      <p className={modalParagraph}>
      1. Generavimo laikas
      </p>
      <br />
      <p className={modalParagraph}>
      2. Taškų skaičius
      </p>
      <br />
      <p className={modalParagraph}>
      3. Trikampių skaičius
      </p>
      <br />
      <p className={modalParagraph}>
      4. Ar išlaikytas objekto organiškumas
      </p>
      <br />
      <p className={modalParagraph}>
      5. Ar išlaikytas spalvų gradientas
      </p>
      <br />
      <p className={modalParagraph}>
      6. Estetinis vaizdas
      </p>
      <br />
      <p className={modalParagraph}>
      7. Eksportavimo galimybės
      </p>
      <br />
      <p className={modalParagraph}>
      Atlikęs tyrimą padariau išvadą, kad:
      </p>
      <br />
      <p className={modalParagraph}>
      Tarp visų programų labiausiai išsiskyrė „Triangula“ programa. Ši programa visais įvestais atvejais sugebėjo sėkmingai išspręsti pateiktas užduotis. Pilna programos versija (kuri taip pat yra ir nemokama) suteikia galimybė išsieksportuoti modelį SVG formatu kas palengvina programavimo darbą. Taip pat ši programa toleruoja didesnį kiekį smulkių detalių, nes objektus supaprastina. Dėl to mano baigiamojo darbo užduočiai spręsti, ši programa tapo pačia tinkamiausia.
      </p>
      <br />
    </div>
  );
  }
  
ApieProjekta.protoTypes = {
    setCurrentView: PropTypes.func.isRequired,
}

export default ApieProjekta;
