/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';
import { SERVER_URL } from '../api-client';
import vehiclesResponse from './vehicles-response';
import charactersResponse from './characters-response';

export const handlers = [
  rest.post(SERVER_URL, (req, res, ctx) => {
    if (req.body.query.match('allVehicles')) {
      return res(ctx.json(vehiclesResponse));
    }
    if (req.body.query.match('allPeople')) {
      return res(ctx.json(charactersResponse));
    }

    throw new Error('Invalid query string');
  }),
];
