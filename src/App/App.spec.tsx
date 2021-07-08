import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { server } from '../mocks/server';
import App from './App';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('/characters page fetches characters on mount', async () => {
  render(<App />);
  const charactersButton = screen.getByRole('button', { name: 'Characters' });
  fireEvent.click(charactersButton);

  const heading = await screen.findByRole('heading', { name: 'Characters' });
  expect(heading).toBeInTheDocument();

  const listItems = await screen.findAllByRole('listitem');
  expect(listItems).toHaveLength(82);
});

test('/vehicles page fetches vehicles on mount', async () => {
  render(<App />);
  const vehiclesButton = screen.getByRole('button', { name: 'Vehicles' });
  fireEvent.click(vehiclesButton);

  const heading = await screen.findByRole('heading', { name: 'Vehicles' });
  expect(heading).toBeInTheDocument();

  const listItems = await screen.findAllByRole('listitem');
  expect(listItems).toHaveLength(39);
});
