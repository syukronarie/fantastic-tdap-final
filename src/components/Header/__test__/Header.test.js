/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders Header component', () => {
  render(<Header title="My App" />);
  const headingElement = screen.getByTestId('data-header');
  expect(headingElement).toBeInTheDocument();
});

// Getting element with getByRole

it('should be render same text passed into the title props', () => {
  render(<Header title="Hello" />);
  const h1Element = screen.getByRole('heading');
  expect(h1Element).toBeInTheDocument();
});

// Getting element with getByTitle

it('should be render same text passed into the prop', () => {
  render(<Header title="todo" />);
  const h1Element = screen.getByTitle('Header');
  expect(h1Element).toBeInTheDocument();
});

// Getting element with findByText
it('should be render same text passed into prop', async () => {
  render(<Header title="todo" />);
  const h1Element = await screen.findByText(/todo/i);
  expect(h1Element).toBeInTheDocument();
});

// Getting element with queryByText
it('should be render same text passed into props', () => {
  render(<Header title="todo" />);
  const h1Element = screen.queryByText(/lala/i);
  expect(h1Element).not.toBeInTheDocument();
});

// Getting element with getAllByText
it('Should be render same text passed into props', () => {
  render(<Header title="todo" />);
  const h1Element = screen.getAllByText(/todo/i);
  expect(h1Element.length).toBe(1);
});
