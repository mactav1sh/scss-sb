import { nanoid } from 'nanoid';
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

      {/* ***** SECOND WAY OF USAGE *****/}
      {users && (
        <Table classPrefix="users" data={users}>
          {users.map((user) => {
            const specialUser = {
              user: user.id,
              name: <NameTag name={user.name} />,
              email: user.email,
              role: user.role,
              buttons: <UserButtons />,
            };

            return (
              // FIRST WAY OF USAGE
              <TableRow
                classPrefix={'table-row'}
                key={nanoid()}
                item={specialUser}
                renderCell={(item: JSX.Element) => item}
              />
              // SECOND WAY OF USAGE
              // <TableRow classPrefix={'table-row'} key={nanoid()} item={user} />
            );
          })}
        </Table>
      )}
    </PageLayout>
  );
};

export default Users;
