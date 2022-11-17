import NameTag from '../nameTag/NameTag';
import './TableRow.scss';
import Button from '../button/Button';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { returnClassName } from '../utils/tools';
import { ReactNode } from 'react';

interface IProps {
  item?: any;
  classPrefix?: string;
  children?: ReactNode;
}

const TableRow = ({
  item = { name: 'testing', email: 'testing@mail.com', role: 100 },
  classPrefix = '',
  children,
}: IProps) => {
  const keys = Object.keys(item);
  console.log(children);

  return (
    <tr className="tableRow">
      {/* if there's a children it will return children wrapped in <td> */}
      {keys.map((key, i) =>
        children ? (
          <td key={i} className={returnClassName(classPrefix, key)}>
            {children}
          </td>
        ) : (
          <td key={i} className={returnClassName(classPrefix, key)}>
            {item[key]}
          </td>
        )
      )}

      {/* WILL BE REMOVED */}
      <td className="buttons">
        <Button
          variant="edit"
          children={
            <div className="content-wrapper">
              <FiEdit />
              <span>edit</span>
            </div>
          }
        />

        <Button
          variant="delete"
          children={
            <div className="content-wrapper">
              <RiDeleteBin5Line />
              <span>delete</span>
            </div>
          }
        />
        {/* WILL BE REMOVED */}
      </td>
    </tr>
  );
};

export default TableRow;
