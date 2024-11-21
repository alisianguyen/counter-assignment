// Import necessary React Testing Library helpers
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test('renders counter message', () => {
  // Verify that the counter message is rendered
  const messageElement = screen.getByText(/counter/i); // Assuming the message includes "counter"
  expect(messageElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Verify that the initial count is 0
  const countElement = screen.getByText(/0/);
  expect(countElement).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Find the "+" button and simulate a click
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  // Verify that the count is incremented
  const countElement = screen.getByText(/1/);
  expect(countElement).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Find the "-" button and simulate a click
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);

  // Verify that the count is decremented
  const countElement = screen.getByText(/-1/);
  expect(countElement).toBeInTheDocument();
});
