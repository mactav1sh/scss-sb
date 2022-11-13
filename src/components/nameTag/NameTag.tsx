import React from 'react';
import './NameTag.scss';

interface IProps {
  name: string;
}

const NameTag = ({ name }: IProps) => {
  return (
    <div className="nameTag">
      <div className="nameTag__circle">
        <span className="nameTag__circle__letter">{name[0]}</span>
      </div>
      <p className="nameTag__name">{name}</p>
    </div>
  );
};

export default NameTag;
