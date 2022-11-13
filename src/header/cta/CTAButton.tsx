import React from 'react';

interface IProps {
  title: string;
  href: string;
}

const CTAButton = ({ title, href }: IProps) => {
  return <a href={href}>{title}</a>;
};

export default CTAButton;
