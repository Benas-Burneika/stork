import { modalParagraph, modalParagraphAuthor} from "../../config";

function Peleda() {
  return (
    <div>
      <p className={modalParagraphAuthor}>
      Marius Čepulis, gamtos fotografas
      </p>
      <br />
      <p className={modalParagraph}>
      „Sakysit, pelėdos yra miškų paukščiai? Nė velnio. Naminė pelėda tam ir pavadinta namine, kad gyvena netoli žmogaus, kartais kuriasi net pastatų kaminuose. Atėnės palydovė pelėdikė gyvena tik namų pastogėse, palėpėse, pastatų plyšiuose. Tiesa, ji reta pas mus. Taip pat reta ir liepsnotoji pelėda, kuri irgi mielai kuriasi klėčių, tvartų palėpėse. Didysis apuokas ir tas pradeda kraustytis į miestus ir sukti lizdus ant daugiaaukšių, nes kas kitas mums balandžius ir kates išgaudys?“
      </p>
      <br />
      <br />
      <br />
      <p className={modalParagraphAuthor}>
      Pilną straipsnį skaitykite LRT tinklalapyje:
        <a href="https://www.lrt.lt/naujienos/gyvenimas/13/1185341/marius-cepulis-sparnuotieji-musu-kaimynai" target="_blank" rel="noopener noreferrer" > Marius Čepulis. Sparnuotieji mūsų kaimynai</a> 
      </p>
    </div>
  );
}

export default Peleda;
