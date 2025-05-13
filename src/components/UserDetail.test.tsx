import { render, screen } from '@testing-library/react';
import UserDetail from '../components/UserDetail';

const mockUser = {
  email: 'john@example.com',
  phone: '123-456-7890',
  website: 'john.com',
  company: {
    name: 'John Inc.',
  },
};

describe('UserDetail', () => {
  it('renders user details correctly', () => {
    render(<UserDetail user={mockUser} />);
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
    expect(screen.getByText(/john.com/i)).toBeInTheDocument();
    expect(screen.getByText(/john inc\./i)).toBeInTheDocument();
  });
});