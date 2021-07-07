import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('Characters button navigates to /characters page', () => {
  render(<App />);
  const charactersButton = screen.getByRole('button', { name: 'Characters' });
  fireEvent.click(charactersButton);
  expect(window.location.pathname).toMatch('/characters');
});

test('Vehicles button navigates to /vehicles page', () => {
  render(<App />);
  const vehiclesButton = screen.getByRole('button', { name: 'Vehicles' });
  fireEvent.click(vehiclesButton);
  expect(window.location.pathname).toMatch('/vehicles');
});
