import NameTag from '../nameTag/NameTag';
import './TableRow.scss';
import Button from '../button/Button';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

interface IProps {
  name?: string;
  email?: string;
  role?: number;
  index?: number;
}

const TableRow = ({
  name = 'john smith',
  email = 'john@mail.com',
  role = 1,
  index = 0,
}: IProps) => {
  return (
    <tr className="tableRow">
      <td className="index">{index}</td>
      <td className="name">
        <NameTag name={name} />
      </td>
      <td className="mail">{email}</td>
      <td className="role">{role}</td>
      <td className="buttons">
        <Button
          variant="edit"
          content={
            <>
              <FiEdit />
              <span>edit</span>
            </>
          }
        />
        <Button
          variant="delete"
          content={
            <>
              <RiDeleteBin5Line />
              <span>delete</span>
            </>
          }
        />
      </td>
    </tr>
  );
};

export default TableRow;
