import React from 'react';
import styled from 'styled-components';

const Detail = styled.div`
  margin-top: 1rem;
`;

const UserDetail: React.FC<{ user: any }> = ({ user }) => (
  <Detail>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Website: {user.website}</p>
    <p>Company: {user.company.name}</p>
  </Detail>
);

export default UserDetail;
