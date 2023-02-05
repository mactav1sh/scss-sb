import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component Tests', () => {
  test('holding mouse button down will invoke prop onMouseDown function', () => {
    const mockFn = jest.fn();

    render(<Button children="click me" onMouseDown={mockFn} />);
    const button = screen.getByRole('button', {
      name: /click me/i,
    });

    fireEvent.mouseDown(button);
    expect(mockFn).toHaveBeenCalled();
  });

  test('clicking mouse button will invoke prop onClick function', () => {
    const mockFn = jest.fn();

    render(<Button children="click me" onClick={mockFn} />);

    const button = screen.getByRole('button', {
      name: /click me/i,
    });

    userEvent.click(button);

    expect(mockFn).toHaveBeenCalled();
  });

  test('if prop loading is equal true then a div with loading text will appear', () => {
    render(<Button children="click me" loading={true} />);

    const button = screen.getByRole('button', {
      name: /click me/i,
    });

    const loadingDiv = within(button).getByText(/loading/i);

    expect(loadingDiv).toBeInTheDocument();
  });
});
