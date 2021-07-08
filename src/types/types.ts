export enum EntityName {
  character = 'character',
  vehicle = 'vehicle',
}

export type Character = {
  birthYear: string;
  height: number;
  mass: number;
  name: string;
};

export type Vehicle = {
  cargoCapacity: number;
  maxAtmospheringSpeed: number;
  name: string;
};
