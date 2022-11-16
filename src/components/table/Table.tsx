import { ReactNode } from 'react';
import './Table.scss';
import { returnClassName } from '../utils/tools';

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
          <tr className={`table-head ${headerRowClass}`}>
            {/* data headers */}
            {headers.map((header, i) => (
              <th key={i} className={returnClassName(classPrefix, header)}>
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
  item?: any;
  classPrefix?: string;
  children?: (ReactNode | JSX.Element)[];
  rowClass?: string;
}

export const TableRow = ({
  item,
  classPrefix = '',
  children,
  rowClass = '',
}: TableRowProps) => {
  return (
    <tr className={`table-row ${rowClass}`}>
      {/* if there's a children it will return children wrapped in <td> */}
      {children
        ? children.map((child, i) => (
            <td key={i} className={returnClassName(classPrefix, `${i + 1}`)}>
              {child}
            </td>
          ))
        : Object.keys(item).map((key, i) => (
            <td key={i} className={returnClassName(classPrefix, key)}>
              {item[key]}
            </td>
          ))}
    </tr>
  );
};

export default TableRow;
