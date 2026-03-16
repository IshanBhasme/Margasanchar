export const BUSES = [
  {
    id: 1,
    number: "12",
    eta: "3 min",
    etaNum: 3,
    crowd: "Medium",
    route: ["Main Bazaar", "Station Rd", "College", "Market"],
    colorClass: "bg-primary",
  },
  {
    id: 2,
    number: "45",
    eta: "9 min",
    etaNum: 9,
    crowd: "Low",
    route: ["Main Bazaar", "Station Rd", "Market", "Bus Depot"],
    colorClass: "bg-accent",
  },
  {
    id: 3,
    number: "22",
    eta: "17 min",
    etaNum: 17,
    crowd: "High",
    route: ["Main Bazaar", "College", "Market"],
    colorClass: "bg-destructive",
  },
] as const;

export type Bus = (typeof BUSES)[number];

export const STATIONS = [
  "Main Bazaar",
  "Station Rd",
  "College",
  "Market",
  "Bus Depot",
  "Mall Circle",
];
