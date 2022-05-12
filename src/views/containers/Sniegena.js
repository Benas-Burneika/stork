import { css } from "@emotion/css";
import PropTypes from "prop-types";
import { modalParagraph, modalParagraphAuthor } from "../../config";

function Sniegena({mainColor}) {
  const importantColor = css`
    color: ${mainColor};
  `;
  return (
    <div>
      <p className={modalParagraphAuthor}>
      Selemonas Paltanavičius
      </p>
      <br />
      <p className={modalParagraph}>
      „Juodagalvė sniegena – labai gražus paukštis su ryškiai išreikštu lytiniu dimorfizmu: <span className={importantColor}>tik patinėliai yra raudongūžiai</span>, o patelės dūmiškai pilkos. Tiesa, abiejų „kepurėlės“ juodos ir žvilgančios, snapai trumpi ir stori, skirti gliaudyti vaisiukus, pumpurus ir traiškyti gana kietas sėklas ar kauliukus.
      </p>
      <br/>
      <p className={modalParagraph}>
      Iš tikro, juodgalvės sniegenos nėra „tik žiemos“ paukščiai – jos gana sėslios, visus metus gyvenančios mūsų miškuose. Dalis populiacijos migruoja, pasiekdama net Britų salas, tiesa... labai tiksliai pasakyti, kaip toli skrenda mūsų paukščiai, neturime pagrindo, nes lizduose augančių jauniklių, taigi – žinomos kilmės paukščių – sužieduojama labai mažai, tikimybė juos rasti žieduotus toli Europos pakraščiuose yra labai menka. Tie paukščiai, kurie sužieduojami vėlų rudenį ir žiemos pradžioje Ventės rage bei Kuršių nerijoje, nėra mūsiškiai, jie skrenda „kažkur iš šiaurės ar šiaurės rytų“. Taigi, tikroji populiacijos sezoninės kaitos tvarka nelabai žinoma, o daugiausia minčių galvojant apie šių paukščių sėslumą teikia <span className={importantColor}>slapus sniegenų būdas</span> perėjimo metu.“
      </p>
      <br />
      <br />
      <br />
      <p className={modalParagraphAuthor}>
      Pilną straipsnį skaitykite 15min.lt tinklalapyje:
        <a href="https://www.15min.lt/naujiena/aktualu/lietuva/selemonas-paltanavicius-ir-is-sniegu-atskris-sniegenos-56-924276" target="_blank" rel="noopener noreferrer" > <span className={importantColor}>Selemonas Paltanavičius: ir iš sniegų atskris sniegenos</span></a> 
      </p>
    </div>
  );
}

Sniegena.propTypes = {
  mainColor: PropTypes.string.isRequired
}

export default Sniegena;
