import PageLayout from '../../components/pageLayout/PageLayout';
import SearchBar from '../../components/searchBar/SearchBar';
import { users } from '../../data/users';
import { Table, TableRow } from '../../components/table/Table';
import NameTag from '../../components/nameTag/NameTag';
import UserButtons from './UserButtons';
import './Users.scss';

const Users = () => {
  return (
    <PageLayout heading="manage users" buttonLabel="add user">
      <SearchBar />

      {/* ***** FIRST WAY OF USAGE *****/}
      {/* {users && 
      (
        <Table classPrefix="users" data={users}>
          {users.map((user, i) => (
            <TableRow classPrefix={'table-row'} key={i} item={user} />
            ))}
        </Table>
      )
      } */}

      {/* ***** SECOND WAY OF USAGE *****/}
      {users && (
        <Table classPrefix="users" data={users}>
          {users.map((user, i) => {
            // must be in the same order as headers
            const specialUser = [
              user.id,
              <NameTag name={user.name} />,
              user.email,
              user.role,
              <UserButtons />,
            ];

            return (
              <TableRow classPrefix={'table-row'} key={i}>
                {specialUser}
              </TableRow>
            );
          })}
        </Table>
      )}
    </PageLayout>
  );
};

export default Users;
