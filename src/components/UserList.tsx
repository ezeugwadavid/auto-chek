import React from 'react';
import UserDetail from './UserDetail';
import type { UserListProps } from '../interfaces/User';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

const UserCard = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Pagination = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 5px;
`;

const UserList: React.FC<UserListProps> = ({ users, isLoading, isError, handleToggle, expandedUserId, setCurrentPage, currentPage }) => {
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users.</p>;

  return (
    <Container>
      {users.map(user => (
        <UserCard key={user.id}>
          <div>
            <strong>{user.name}</strong>
            <Button onClick={() => handleToggle(user.id)} aria-expanded={expandedUserId === user.id}>
              {expandedUserId === user.id ? 'Hide Details' : 'Show Details'}
            </Button>
          </div>
          {expandedUserId === user.id && <UserDetail user={user} />}
        </UserCard>
      ))}
      <Pagination>
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}>Previous</Button>
        <Button disabled={users.length < 5}  onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
      </Pagination>
    </Container>
  );
};

export default UserList;