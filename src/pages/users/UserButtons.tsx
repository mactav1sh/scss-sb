import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Button from '../../components/button/Button';

const UserButtons = () => {
  return (
    <div className="buttons">
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
    </div>
  );
};

export default UserButtons;
