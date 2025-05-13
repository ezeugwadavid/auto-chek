import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('renders input with correct value', () => {
    render(<SearchBar searchString="john" onSearchChange={() => {}} />);
    const input = screen.getByPlaceholderText(/search users/i);
    expect(input).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe('john');
  });

  it('calls onSearchChange when typing', () => {
    const mockChange = jest.fn();
    render(<SearchBar searchString="" onSearchChange={mockChange} />);
    const input = screen.getByPlaceholderText(/search users/i);
    fireEvent.change(input, { target: { value: 'alice' } });
    expect(mockChange).toHaveBeenCalledWith('alice');
  });
});