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
  location: Location;
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
        name: 'Conferenza di benvenuto',
        from: '10:00',
        to: '12:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: `Esposizioni
                Rinfresco`,
        from: '12:00',
        to: '13:00',
        location: Location.A,
      },
      {
        name: 'Pausa pranzo',
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
      },
    ],
  },
  {
    day: 'Venerdì',
    number: 12,
    schedule: [
      {
        name: 'Laboratori*',
        from: '10:00',
        to: '13:00',
        location: Location.C,
        type: Type.W,
        count: 2,
      },
      {
        name: 'Pausa pranzo',
        from: '13:00',
        to: '15:00',
        location: Location.C,
      },
      {
        name: 'Conferenza Prospettive Vegetali',
        from: '15:00',
        to: '16:30',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Conferenza Emanuele Poki',
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
      },
    ],
  },
  {
    day: 'Sabato',
    number: 13,
    schedule: [
      {
        name: 'Laboratori*',
        from: '10:00',
        to: '13:00',
        location: Location.C,
        type: Type.W,
        count: 2,
      },
      {
        name: 'Pausa pranzo',
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
        from: '18:00',
        to: '19:00',
        location: Location.A,
      },
      {
        name: 'Attività al camping',
        from: '20:00',
        to: ' late',
        location: Location.C,
      },
    ],
  },
];

export default program;
