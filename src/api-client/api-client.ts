import axios from 'axios';
import { Vehicle, Character } from '../types';

export const SERVER_URL =
  'https://swapi-graphql.netlify.app/.netlify/functions/index';

async function sendGraphqlQuery(query: string) {
  const { data } = await axios.post(SERVER_URL, {
    query,
  });
  return data.data;
}

export const getVehicles = async (): Promise<Vehicle[]> => {
  const query =
    '{allVehicles(first: 90) {vehicles {cargoCapacity maxAtmospheringSpeed name}}}';
  const data = await sendGraphqlQuery(query);
  return data.allVehicles.vehicles;
};

export async function getCharacters(): Promise<Character[]> {
  const query = '{allPeople(first: 90) {people {birthYear height mass name}}}';
  const data = await sendGraphqlQuery(query);
  return data.allPeople.people;
}
