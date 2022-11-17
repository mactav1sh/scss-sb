import { ReactNode } from 'react';
import { nanoid } from 'nanoid';
import { returnClassName } from '../utils/tools';
import './Table.scss';

interface TableProps {
  data?: any;
  classPrefix?: string;
  headerRowClass?: string;
  children?: ReactNode;
}

// TABLE COMPONENT
export const Table = ({
  data,
  classPrefix = '',
  headerRowClass = '',
  children,
}: TableProps) => {
  const headers = Object.keys(data?.[0]);
  return (
    <div className="table-container">
      <table className={`table ${returnClassName(classPrefix, 'table')}`}>
        <thead>
          <tr className={`table-head ${headerRowClass}`.trimEnd()}>
            {/* data headers */}
            {headers.map((header) => (
              <th
                key={nanoid()}
                className={returnClassName(classPrefix, header)}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      {!data && <p className="table-message">No data available.</p>}
    </div>
  );
};

// TABLE ROW COMPONENT
interface TableRowProps {
  classPrefix?: string;
  item?: any;
  rowClass?: string;
}

// SECOND IMPLEMENTATION OF TABLE ROWS AND CELLS
export const TableRow = ({
  item,
  classPrefix = '',
  rowClass = '',
}: TableRowProps) => {
  const renderItem = (item: any) =>
    Object.keys(item).map((key) => (
      <td key={nanoid()} className={returnClassName(classPrefix, key)}>
        {item[key]}
      </td>
    ));

  return (
    <tr className={`table-row ${rowClass}`.trimEnd()}>{renderItem(item)}</tr>
  );
};

// FIRST IMPLEMENTATION OF TABLE ROW

// export const TableRow = ({
//   item,
//   classPrefix = '',
//   children,
//   rowClass = '',
// }: TableRowProps) => {
//   return (
//     <tr className={`table-row ${rowClass}`.trimEnd()}>
//       {/* if there's a children it will return children wrapped in <td> */}
//       {children
//         ? children.map((child, i) => (
//             <td
//               key={nanoid()}
//               className={returnClassName(classPrefix, `${i + 1}`)}
//             >
//               {child}
//             </td>
//           ))
//         : Object.keys(item).map((key, i) => (
//             <td key={nanoid()} className={returnClassName(classPrefix, key)}>
//               {item[key]}
//             </td>
//           ))}
//     </tr>
//   );
// };

// WAYS OF USAGE (FIRST IMPLEMENTATION )
/* ***** FIRST WAY OF USAGE *****/
/* {users && 
      (
        <Table classPrefix="users" data={users}>
          {users.map((user, i) => (
            <TableRow classPrefix={'table-row'} key={i} item={user} />
            ))}
        </Table>
      )
      } */

/* ***** SECOND WAY OF USAGE *****/
/* {users.map((user) => {
            // must be in the same order as headers
            const specialUser = [
              user.id,
              <NameTag name={user.name} />,
              user.email,
              user.role,
              <UserButtons />,
            ];

            return (
              <TableRow classPrefix={'table-row'} key={nanoid()}>
                {specialUser}
              </TableRow>
            );
          })} */
