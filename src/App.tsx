import React from 'react';
import { users } from './data/users';
import Table from './components/table/Table';

function App() {
  return (
    <React.Fragment>
      <Table data={users} />
      <Table />
    </React.Fragment>
  );
}

export default App;
