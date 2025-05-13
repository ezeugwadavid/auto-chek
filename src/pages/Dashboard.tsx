import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';
import ChartPanel from '../components/ChartPanel';
import ThemeToggle from '../components/ThemeToggle';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/api';
import type { User } from '../interfaces/User';

const Dashboard: React.FC = () => {
  const { data: users = [], isLoading, isError } = useQuery<User[]>({ queryKey: ['users'], queryFn: fetchUsers });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);
  const [searchString, setSearchString] = useState('');
  const USERS_PER_PAGE = 5;

  const handleToggle = (id: number) => {
    setExpandedUserId(expandedUserId === id ? null : id);
  };

  const filteredUsers = 
    users.filter((user) =>
      user.name.toLowerCase().includes(searchString.toLowerCase()) ||
      user.email.toLowerCase().includes(searchString.toLowerCase())
    );

    const paginatedUsers = filteredUsers.slice(
      (currentPage - 1) * USERS_PER_PAGE,
      currentPage * USERS_PER_PAGE
    );

    const userListProps = {
      users: paginatedUsers,
      isLoading,
      isError,
      handleToggle,
      setCurrentPage,
      currentPage,
      expandedUserId
    }

  return (
    <div style={{ padding: '1rem' }}>
      <ThemeToggle />
      <SearchBar  searchString={searchString} onSearchChange={setSearchString} />
      <ChartPanel />
      <UserList {...userListProps} />
    </div>
  );
};

export default Dashboard;