import { render, screen, fireEvent } from '@testing-library/react';
import UserList from '../components/UserList';
import type { User } from '../interfaces/User';

const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456',
    website: 'john.com',
    company: { name: 'John LLC' },
    address: {
      street: '123 Main',
      suite: 'Apt 1',
      city: 'Metropolis',
      zipcode: '12345',
    },
  },
];

describe('UserList', () => {
  it('shows loading message', () => {
    render(
      <UserList
        users={[]}
        isLoading={true}
        isError={false}
        handleToggle={() => {}}
        currentPage={1}
        setCurrentPage={() => {}}
        expandedUserId={null}
      />
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(
      <UserList
        users={[]}
        isLoading={false}
        isError={true}
        handleToggle={() => {}}
        currentPage={1}
        setCurrentPage={() => {}}
        expandedUserId={null}
      />
    );
    expect(screen.getByText(/error loading users/i)).toBeInTheDocument();
  });

  it('renders users and handles detail toggle', () => {
    const mockToggle = jest.fn();
    render(
      <UserList
        users={mockUsers}
        isLoading={false}
        isError={false}
        handleToggle={mockToggle}
        currentPage={1}
        setCurrentPage={() => {}}
        expandedUserId={null}
      />
    );
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /show details/i });
    fireEvent.click(button);
    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  it('disables Previous button on first page', () => {
    render(
      <UserList
        users={mockUsers}
        isLoading={false}
        isError={false}
        handleToggle={() => {}}
        currentPage={1}
        setCurrentPage={() => {}}
        expandedUserId={null}
      />
    );
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();
  });

  it('disables Next button if less than 5 users', () => {
    render(
      <UserList
        users={mockUsers}
        isLoading={false}
        isError={false}
        handleToggle={() => {}}
        currentPage={1}
        setCurrentPage={() => {}}
        expandedUserId={null}
      />
    );
    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
  });
});