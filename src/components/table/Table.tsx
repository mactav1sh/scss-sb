import './Table.scss';
import { users } from '../../data/users';
import TableRow from '../tableRow/TableRow';
interface IProps {
  data?: typeof users;
}

const Table = ({ data }: IProps) => {
  return (
    <>
      <table className="usersTable">
        <thead>
          <tr className="tableHead">
            <th className="index">no</th>
            <th className="name">profile</th>
            <th className="mail">email</th>
            <th className="role">role</th>
            <th className="buttons"></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((user, i) => (
              <TableRow
                key={i}
                index={i + 1}
                name={user.name}
                email={user.email}
                role={user.role}
              />
            ))}
        </tbody>
      </table>
      {!data && <p className="data__message">No data available.</p>}
    </>
  );
};

export default Table;
