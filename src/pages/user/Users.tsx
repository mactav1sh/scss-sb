import React from 'react';
import PageLayout from '../../components/pageLayout/PageLayout';
import SearchBar from '../../components/searchBar/SearchBar';
import Table from '../../components/old-table/Table';
import { users } from '../../data/users';
import './Users.scss';

const Users = () => {
  return (
    <PageLayout heading="manage users" buttonLabel="add user">
      <SearchBar />
      <Table classPrefix="users" data={users} />
    </PageLayout>
  );
};

export default Users;
