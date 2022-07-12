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
  time: string;
  location: Location;
  type?: Type;
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
        time: '10:00 - 12:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: `Esposizioni
                Rinfresco`,
        time: '12:00 - 13:00',
        location: Location.A,
      },
      {
        name: 'Pausa pranzo',
        time: '13:00 - 15:00',
        location: Location.A,
      },
      {
        name: 'Conferenza Hackability',
        time: '15:00 - 16:30',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Conferenza CoScienza Ambientale',
        time: '16:30 - 18:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Esposizioni, Networking e Jam Session',
        time: '18:00 - 20:00',
        location: Location.A,
      },
      {
        name: 'Attività al camping',
        time: '20:00 to late',
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
        time: '10:00 - 13:00',
        location: Location.C,
        type: Type.W,
      },
      {
        name: 'Pausa pranzo',
        time: '13:00 - 15:00',
        location: Location.C,
      },
      {
        name: 'Conferenza Prospettive Vegetali',
        time: '15:00 - 16:30',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Conferenza Emanuele Poki',
        time: '16:30 - 18:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Esposizioni, Networking e Jam Session',
        time: '18:00 - 20:00',
        location: Location.A,
      },
      {
        name: 'Attività al camping',
        time: '20:00 to late',
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
        time: '10:00 - 13:00',
        location: Location.C,
        type: Type.W,
      },
      {
        name: 'Pausa pranzo',
        time: '13:00 - 15:00',
        location: Location.C,
      },
      {
        name: 'Conferenza Marina Berardi',
        time: '15:00 - 16:30',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Conferenza Museo Tradizioni e Territorio',
        time: '16:30 - 18:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Evento Conclusivo',
        time: '18:00 - 19:00',
        location: Location.A,
        type: Type.F,
      },
      {
        name: 'Esposizioni, Networking e Jam Session',
        time: '18:00 - 19:00',
        location: Location.A,
      },
      {
        name: 'Attività al camping',
        time: '20:00 to late',
        location: Location.C,
      },
    ],
  },
];

export default program;
