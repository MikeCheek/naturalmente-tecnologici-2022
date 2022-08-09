export enum Location {
  A = 'Auditorium',
  C = 'Confino',
}

export enum Type {
  W = 'Workshop',
  F = 'Conferenza',
}

export interface Event {
  name: string;
  from: string;
  to: string;
  location?: Location;
  type?: Type;
  count?: number;
}

export interface Day {
  day: string;
  number: number;
  schedule: Event[];
}

export const program: Day[] = [
  {
    day: 'Giovedì',
    number: 11,
    schedule: [
      {
        name: 'Colazione',
        from: '09:00',
        to: '10:00',
        location: Location.A,
      },
      {
        name: 'Conferenza di benvenuto',
        from: '10:00',
        to: '11:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: `Visita guidata Municipio`,
        from: '11:00',
        to: '13:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Pausa pranzo (Offerto da Parco dei Cigni)',
        from: '13:00',
        to: '15:00',
        location: Location.A,
      },
      {
        name: 'Conferenza Hackability',
        from: '15:00',
        to: '16:30',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Conferenza CoScienza Ambientale',
        from: '16:30',
        to: '18:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Esposizioni, Networking e Jam Session',
        from: '18:00',
        to: '20:00',
        location: Location.A,
        count: 2,
      },
      {
        name: 'Attività al camping',
        from: '20:00',
        to: ' late',
        location: Location.C,
        count: 3,
      },
    ],
  },
  {
    day: 'Venerdì',
    number: 12,
    schedule: [
      {
        name: 'Colazione',
        from: '08:30',
        to: '10:00',
        location: Location.C,
      },
      {
        name: 'Laboratori*',
        from: '10:00',
        to: '13:00',
        location: Location.C,
        type: Type.W,
        count: 2,
      },
      {
        name: 'Pausa pranzo al Confino',
        from: '13:00',
        to: '15:00',
        location: Location.C,
      },
      {
        name: 'Conferenza Emanuele Poki',
        from: '15:00',
        to: '16:30',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Conferenza Prospettive Vegetali',
        from: '16:30',
        to: '18:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Esposizioni, Networking e Jam Session',
        from: '18:00',
        to: '20:00',
        location: Location.A,
        count: 2,
      },
      {
        name: 'Attività al camping',
        from: '20:00',
        to: ' late',
        location: Location.C,
        count: 3,
      },
    ],
  },
  {
    day: 'Sabato',
    number: 13,
    schedule: [
      {
        name: 'Colazione',
        from: '08:30',
        to: '10:00',
        location: Location.C,
      },
      {
        name: 'Laboratori*',
        from: '10:00',
        to: '13:00',
        location: Location.C,
        type: Type.W,
        count: 2,
      },
      {
        name: 'Pausa pranzo al Gabbiano',
        from: '13:00',
        to: '15:00',
        location: Location.C,
      },
      {
        name: 'Conferenza Marina Berardi',
        from: '15:00',
        to: '16:30',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Conferenza Museo Tradizioni e Territorio',
        from: '16:30',
        to: '18:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Evento Conclusivo',
        from: '18:00',
        to: '19:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Esposizioni, Networking e Jam Session',
        from: '19:00',
        to: '21:00',
        location: Location.A,
        count: 2,
      },
      {
        name: 'Mega grigliata',
        from: '21:00',
        to: '22:00',
      },
      {
        name: 'DJ Set & Bisboccia',
        from: '22:00',
        to: ' late',
      },
    ],
  },
];

export default program;
