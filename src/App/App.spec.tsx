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
  expect(listItems).toHaveLength(30);
});

test('/vehicles page fetches vehicles on mount', async () => {
  render(<App />);
  const vehiclesButton = screen.getByRole('button', { name: 'Vehicles' });
  fireEvent.click(vehiclesButton);

  const heading = await screen.findByRole('heading', { name: 'Vehicles' });
  expect(heading).toBeInTheDocument();

  const listItems = await screen.findAllByRole('listitem');
  expect(listItems).toHaveLength(30);
});

test('user happy path', async () => {
  render(<App />);
  const vehiclesButton = screen.getByRole('button', { name: 'Vehicles' });
  fireEvent.click(vehiclesButton);

  const vehiclesPage1Items = await screen.findAllByRole('listitem');
  expect(vehiclesPage1Items).toHaveLength(30);

  const vehiclesPage2Button = screen.getByRole('button', { name: '2' });
  fireEvent.click(vehiclesPage2Button);
  const vehiclesPage2Items = screen.getAllByRole('listitem');
  expect(vehiclesPage2Items).toHaveLength(9);

  const goHomeLink = screen.getByRole('link', { name: 'Go back' });
  fireEvent.click(goHomeLink);

  const charactersButton = screen.getByRole('button', { name: 'Characters' });
  fireEvent.click(charactersButton);

  const charactersPage1Items = await screen.findAllByRole('listitem');
  expect(charactersPage1Items).toHaveLength(30);

  const charactersPage3Button = screen.getByRole('button', { name: '3' });
  fireEvent.click(charactersPage3Button);
  const charactersPage3Items = screen.getAllByRole('listitem');
  expect(charactersPage3Items).toHaveLength(22);
});
