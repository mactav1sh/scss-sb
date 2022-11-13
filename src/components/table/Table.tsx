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
        <tr className="tableHead">
          <th className="tableHead__index">no</th>
          <th className="tableHead__name">profile</th>
          <th className="tableHead__mail">email</th>
          <th className="tableHead__role">role</th>
          <th className="tableHead__buttons"></th>
        </tr>
        {data &&
          data?.map((user, i) => (
            <TableRow
              index={i + 1}
              name={user.name}
              email={user.email}
              role={user.role}
            />
          ))}
      </table>
      {!data && <p className="data__message">No data available.</p>}
    </>
  );
};

export default Table;
