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
      <td className="tableRow__index">{index}</td>
      <td className="tableRow__name">
        <NameTag name={name} />
      </td>
      <td className="tableRow__mail">{email}</td>
      <td className="tableRow__role">{role}</td>
      <td className="tableRow__buttons">
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
