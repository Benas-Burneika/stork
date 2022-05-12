import { css } from "@emotion/css";
import PropTypes from "prop-types";
import { modalParagraph, modalParagraphAuthor } from "../../config";

function Erelis({mainColor}) {
  const importantColor = css`
    color: ${mainColor};
  `;
  return (
    <div>
      <p className={modalParagraphAuthor}>
      Šilutės rajono savivaldybė, vystydama projektą „Pažink Pamario kraštą keliaudamas paukščių keliu“ ir skatindama ornitologinį turizmą, kartu su Šilutės turizmo informacijos centru kviečia susipažinti su saugomais plėšriaisiais paukščiais, gyvenančiais Nemuno deltos regione, ir atvykti jų stebėti.
      </p>
      <br />
      <p className={modalParagraph}>
      „Elegantiškai sklandantys, žemyn nulenkę snapus ir riestais aštriais nagais savo grobį gaudantys paukščiai nejučia priverčia pakelti akis į dangų. Vienu metu apima ir atsargi pagarba, ir noras tiesiog grožėtis. Ar daug kartų jums yra tekę savo akimis stebėti <span className={importantColor}>plėšriuosius paukščius?</span>

      </p>
      <br />
      <p className={modalParagraph}>
      Sausgalvių pievų botaniniame-zoologiniame draustinyje visus metus galima pamatyti į Lietuvos raudonąją knygą įtrauktą <span className={importantColor}>jūrinį erelį.</span>
      </p>
      <br />
      <p className={modalParagraph}>
      Šis mūsų šalies draustinis yra jūrinių erelių pamėgta vieta. Skrendantį jūrinį erelį nesunkiai atskirsite nuo kitų erelių dėl įspūdingo dydžio, tiesaus lyg lenta silueto, tarsi pirštuotų, <span className={importantColor}>2,5 metro ilgio sparnų</span>, geltono snapo ir baltos uodegos.“
      </p>
      <br />
      <p className={modalParagraph}>

      </p>
      <br />
      <br />
      <br />
      <p className={modalParagraphAuthor}>
      Pilną straipsnį skaitykite Lrytas.lt tinklalapyje:
        <a href="https://www.lrytas.lt/gamta/fauna/2021/04/21/news/pamario-kraste-isskirtine-proga-pamatyti-plesriuosius-paukscius-medziokles-ypatumai-gniauzia-kvapa-19095755" target="_blank" rel="noopener noreferrer" > <span className={importantColor}>Pamario krašte – išskirtinė proga pamatyti plėšriuosius paukščius</span></a> 
      </p>
    </div>
  );
}

Erelis.propTypes = {
  mainColor: PropTypes.string.isRequired
}

export default Erelis;
