import React from 'react';
import './NameTag.scss';

interface IProps {
  name: string;
}

const NameTag = ({ name }: IProps) => {
  return (
    <div className="nameTag">
      <div className="circle">
        <span className="letter">{name[0]}</span>
      </div>
      <p className="name">{name}</p>
    </div>
  );
};

export default NameTag;
