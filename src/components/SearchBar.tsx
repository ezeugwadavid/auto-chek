import React from "react";
import styled from "styled-components";
import type { SearchProps } from "../interfaces/Search";

const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
`;

const SearchBar: React.FC<SearchProps> = ({ searchString, onSearchChange }) => {
  return (
    <Input
      type="text"
      placeholder="Search users..."
      value={searchString}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default SearchBar;
