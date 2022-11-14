import React from 'react';
import { users } from './data/users';
import Table from './components/table/Table';
import SearchBar from './components/searchBar/SearchBar';
import PageLayout from './components/pageLayout/PageLayout';

function App() {
  return (
    <React.Fragment>
      <PageLayout heading="manage users" buttonLabel="add user">
        <SearchBar />
        <Table data={users} />
      </PageLayout>
    </React.Fragment>
  );
}

export default App;
