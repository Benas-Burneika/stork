import { css } from "@emotion/css";
import PropTypes from "prop-types";
import { modalParagraph, modalParagraphAuthor } from "../../config";

function Tulzys({mainColor}) {
  const importantColor = css`
    color: ${mainColor};
  `;
  return (
    <div>
      <p className={modalParagraphAuthor}>
      Modestas Ružauskas
      </p>
      <br />
      <p className={modalParagraph}>
      Tulžys – <span className={importantColor}>vienas spalvingiausių ir gražiausių Lietuvos paukščių</span>, žiemojantis neužšalusių vandens telkinių pakrantėse, nuspalvinantis baltą žiemos kraštovaizdį neįprastai egzotine, ryškia spalva.
      </p>
      <br/>
      <p className={modalParagraph}>
      Nors tulžys ir ryškus, tačiau pastebėtį jį ne visuomet lengva, mat šis paukštis dažniausiai laukia praplaukiančios žuvelės tupėdamas savo medžioklės vietoje, kuri paprastai būna koks nors pagalys ar kita vieta, iškilusi per metrą nuo vandens paviršiaus. Tulžius lengvai išduoda jų specifinis, <span className={importantColor}>nesunkiai atpažįstamas balsas</span>, kuris girdimas dažniausiai jiems perskrendant. Neretai tulžiai aptinkami <span className={importantColor}>ne po vieną</span>, tad pastebėjus tulžį reikėtų atidžiau patyrinėti vietą, bandant nustatyti ar nėra kito poros nario šalia. Tai ypač aktualu vasario mėn., kuomet paukščiai, jei nėra didelių šalčių, pradeda poruotis. 
      </p>
      <br />
      <br />
      <br />
      <p className={modalParagraphAuthor}>
      Pilną straipsnį skaitykite birdlife.lt tinklalapyje:
        <a href="http://www.birdlife.lt/2017-2018-metu-ziemos-paukstis-tulzys" target="_blank" rel="noopener noreferrer" > <span className={importantColor}>2017-2018 metų žiemos paukštis – tulžys</span></a> 
      </p>
    </div>
  );
}

Tulzys.propTypes = {
  mainColor: PropTypes.string.isRequired
}

export default Tulzys;
