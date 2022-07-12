export interface GuestInfo {
  name: string;
  field: string;
  about: string;
  theme?: string;
}

export const guestsInfo: GuestInfo[] = [
  {
    name: 'Carlo Boccazzi Varotto',
    field: 'Conferenza Hackability',
    about: `Ricercatore economico e attivista digitale,
    studia da anni soluzioni di innovazione tecnologica e sociale che possa migliorare la vita delle persone con disabilità, anziani e bambini.
    È tra gli ideatori Hackability, un innovativo modello di co-design, Carlo è anche il presidente dell’associazione MakPi che promuove l'attività dei fablab e dei laboratori creativi del nord-ovest.
    `,
    theme: `Come la tecnologia può essere messa a disposizione delle persone per migliorare la vita partendo dal basso`,
  },
  {
    name: 'Paolo Bonelli',
    field: 'CoScienza Ambientale',
    about: `Maker, appassionato del DIY scientifico e di Citizen Science.
    Laureato in Fisica e in Fisica dell’Atmosfera, si è occupato per molti anni di meteorologia applicata alle energie rinnovabili e all’ambiente. Le sue ricerche sono state oggetto di pubblicazioni su riviste scientifiche internazionali.
    Dal 2013 il suo interesse si è spostato verso l’elettronica e l’informatica open-source partecipando attivamente al progetto ARETHA per la costruzione e la sperimentazione di un pannello solare low-cost.
    Collabora con WeMake s.r.l. di Milano dove tiene corsi e workshop sull’elettronica e sulla costruzione di sensori per l’ambiente. 
    Di recente ha collaborato con gruppi di ricerca universitaria nel campo dell’acquisizione dei dati relativi alle risorse idriche del territorio.
    E’ docente presso la scuola SIAM di Milano e presso la Fastweb Digital Academy.
    
    `,
    theme: `Come la tecnologia può diventare strumenti di empowerment per il monitoraggio ambientale effettuato dai cittadini`,
  },
  {
    name: 'Emanuele Poki',
    field: 'Systema Naturae',
    about: `Inizia a disegnare in tenera età,si diploma in grafica e fotografia all'Istituto D'arte passa dal writing alla poster art iniziando da quest'ultima un lungo percorso estetico e concettuale. I suoi lavori sono intrisi degli elementi che fanno parte della sua vita: di sagome periferiche del quartiere in cui vive, della voluminosità e delle sproporzioni del barocco e della schiettezza della sua terra, la Sicilia; I suoi soggetti vivono dell’autenticità, della crudezza e del fascino che caratterizzano la natura con i suoi equilibri, il suo divenire e la sua armonia insidiata. Descrive ed interpreta principalmente la natura, il rapporto tra Uomo ed Ambiente, le tradizioni, gli aneddoti, il movimento e le forze impercettibili che operano quotidianamente, fonti di evoluzioni o turbamenti. In questi anni di attività fa parte del collettivo Res Publica Temporanea. E ha iniziato collaborazioni con enti scientifici come l'Orto botanico di Catania, il museo delle scienze naturali di Trieste e quello di Brescia per consulenze e collaborazioni per Systema Naturae un progetto sull’educazione ambientale e la tutela delle specie autoctone e del territorio.
    `,
  },
];

export default guestsInfo;
