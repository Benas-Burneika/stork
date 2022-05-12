import { modalParagraph, modalParagraphAuthor } from "../../config";

function Gulbe() {
  return (
    <div>
      <p className={modalParagraphAuthor}>
      Marius Čepulis, gamtos fotografas
      </p>
      <br />
      <p className={modalParagraph}>
      „Dažniausia mūsų bulbė – gulbė nebylė. Nėra ji visai nebyli. Ji moka ir tyliai visaip cypčioti, šnypšti, bet tokio gražaus balso kaip giesmininkių neturi. Tai ir patys stambiausi mūsų paukščiai. Gulbė nebylė – trečias pagal svorį skraidantis pasaulio paukštis. Patinas gali sverti net 15 kg, o juk jūrinis erelis vos iki 5 kg tempia.
      </p>
      <br/>
      <p className={modalParagraph}>
      Nuo kitų gulbių jos skiriasi ir rausvai oranžine snapo spalva, dideliu juodu gumbu snapo pamate (patelių gumbas mažesnis). Na ir laikysena jų kitokia – kaklą laiko sulenktą (giesmininkių tiesus), patinai dažnai plaukioja iškėlę sparnus. Jos lygiai tokios pat agresyvios, ypač perėjimo metu puola visus, kas artinasi prie jų teritorijos. Net veja prie kranto priartėjusius keturkojus ar dvikojus gyvius. Kartais elgiasi kaip uzurpatoriai, neleisdami aplink perėti kitoms vandens paukščių rūšims.
      </p>
      <br />
      <p className={modalParagraph}>
      Tikiu, kad tarp vandens paukščių posakis „duok durniui kelia“ yra pritaikytas būtent gulbėms. Vienintelės, kurios nebylėms nenusileidžia ir kartais nukonkuruoja, yra gulbės giesmininkės. Tiesa, gulbės nebylės irgi visai neseniai pradėjo pas mus perėti.“
      </p>
      <br />
      <br />
      <br />
      <p className={modalParagraphAuthor}>
      Pilną straipsnį skaitykite LRT tinklalapyje:
        <a href="https://www.lrt.lt/naujienos/gyvenimas/13/1281371/marius-cepulis-apie-bjauriuosius-anciukus" target="_blank" rel="noopener noreferrer" > Marius Čepulis. Apie bjauriuosius ančiukus</a> 
      </p>
    </div>
  );
}

export default Gulbe;
