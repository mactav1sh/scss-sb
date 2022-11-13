import React from 'react';
import { users } from './data/users';
import Table from './components/table/Table';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  return (
    <React.Fragment>
      <SearchBar />
      <Table data={users} />
    </React.Fragment>
  );
}

export default App;
