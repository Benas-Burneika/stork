import { css } from "@emotion/css";
import PropTypes from "prop-types";
import { modalParagraph, modalParagraphAuthor } from "../../config";


function Kekstas({mainColor}) {
  const importantColor = css`
    color: ${mainColor};
  `;
  return (
    <div>
      <p className={modalParagraphAuthor}>
      Raganų Kalnas
      </p>
      <br />
      <p className={modalParagraph}>
      „Kėkštas – <span className={importantColor}>ąžuolų draugas.</span> Nemaža dalis ąžuolų sudygsta būtent dėl kėkštų užmaršumo – rudeniop, ąžuolams subrandinus giles, kėkštai jas aktyviai renka ir slapsto įvairiausiuose girių užkampiuose, kad atėjus žiemai savo sandėliuose turėtų apsčiai maisto. Visgi dalis kėkštų žiemos nesulaukia, kiti visų atsargų per žiemą nesunaudoja, treti pamiršta, kur pasidėjo, ir neberanda visų rudenį paslėptų gilių. <span className={importantColor}>Taip kėkštai platina ąžuolus.</span>
      </p>
      <br/>
      <p className={modalParagraph}>
      Šie sparnuočiai dažni mūsų giriose. Paprastai juos pirmiau išgirstame, o tik vėliau pamatome. Aštrus, rėkimą primenantis balsas girdimas toli. Išvydęs žmogų kėkštas kaipmat surinka ir nuskrenda į saugesnę vietą, taip savo gentainiams ir kitiems miško gyventojams <span className={importantColor}>pranešdamas apie pašalietį.</span> Pamatyti ir atpažinti šį paukštį nesunku. Tai maždaug kuosos dydžio ir sudėjimo, tačiau savo apdaro spalvingumu su ja nesupainiojamas sparnuotis. Rusvos rožinio atspalvio kūno plunksnos – dar ne viskas, didžiausias šio paukščio grožis slypi sparnuose. Kėkštui juos išskleidus tiesiog šviečia už dangų žydresnės, juodais brūkšneliais raibstančios plunksnos. Nors kėkštui tupint sunkiau įžiūrėti šį akį veriantį raibumą, visgi pamačius paukštį skrendantį tai būna pirmasis požymis, kuris krinta į akis.
      </p>
      <br />
      <p className={modalParagraph}>
      Kėkštų Lietuvoje sutiksite ištisus metus, o daugiausia – rugsėjį ir spalį, kuomet pro Lietuvą praskrenda tolimoje šiaurėje perėję paukščiai: Skandinavijoje ir Sibire jiems sunkiau peržiemoti, todėl dalis jų pasitraukia į pietus.“
      </p>
      <br />
      <br />
      <br />
      <p className={modalParagraphAuthor}>
      Pilną straipsnį skaitykite raganukalnas.lt tinklalapyje:
        <a href="https://www.raganukalnas.lt/lt/pauksciai/kekstas/9#" target="_blank" rel="noopener noreferrer" > <span className={importantColor}>KĖKŠTAS</span></a> 
      </p>
    </div>
  );
}

Kekstas.propTypes = {
  mainColor: PropTypes.string.isRequired
}

export default Kekstas;
