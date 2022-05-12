import { css } from "@emotion/css";
import PropTypes from "prop-types";
import { modalParagraph, modalParagraphAuthor } from "../../config";

function Peleda({mainColor}) {
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
      „Sakysit, pelėdos yra miškų paukščiai? Nė velnio. Naminė pelėda tam ir pavadinta namine, kad <span className={importantColor}>gyvena netoli žmogaus</span>, kartais kuriasi net pastatų kaminuose. Atėnės palydovė pelėdikė <span className={importantColor}>gyvena tik namų pastogėse</span>, palėpėse, pastatų plyšiuose. Tiesa, ji reta pas mus. Taip pat reta ir liepsnotoji pelėda, kuri irgi mielai kuriasi <span className={importantColor}>klėčių, tvartų palėpėse</span>. Didysis apuokas ir tas pradeda kraustytis į miestus ir sukti lizdus ant <span className={importantColor}>daugiaaukščių</span>, nes kas kitas mums balandžius ir kates išgaudys?“
      </p>
      <br />
      <br />
      <br />
      <p className={modalParagraphAuthor}>
      Pilną straipsnį skaitykite LRT tinklalapyje:
        <a href="https://www.lrt.lt/naujienos/gyvenimas/13/1185341/marius-cepulis-sparnuotieji-musu-kaimynai" target="_blank" rel="noopener noreferrer" > <span className={importantColor}>Marius Čepulis. Sparnuotieji mūsų kaimynai</span></a> 
      </p>
    </div>
  );
}

Peleda.propTypes = {
  mainColor: PropTypes.string.isRequired
}

export default Peleda;
