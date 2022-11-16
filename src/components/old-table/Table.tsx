import './Table.scss';
import { users } from '../../data/users';
import TableRow from '../tableRow/TableRow';
import { returnClassName } from '../utils/tools';

interface IProps {
  data?: typeof users;
  classPrefix?: string;
  indexField?: {
    visible: boolean;
    label: string;
  };
  headerRowClass?: string;
}

const Table = ({
  data = users,
  classPrefix = '',
  headerRowClass = '',
}: IProps) => {
  // Get header names
  const headers = Object.keys(data?.[0]);

  return (
    <div className="table-container">
      <table className="usersTable">
        <thead>
          <tr className={`tableHead ${headerRowClass}`}>
            {/* data headers */}
            {headers.map((header, i) => (
              <th key={i} className={returnClassName(classPrefix, header)}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, i) => (
              <TableRow classPrefix={classPrefix} key={i} item={item} />
            ))}
        </tbody>
      </table>
      {!data && <p className="data--message">No data available.</p>}
    </div>
  );
};

export default Table;
