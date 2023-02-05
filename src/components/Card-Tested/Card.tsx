import React, { ReactNode, useState } from 'react';
import './style.css';

type Props = {
  children: ReactNode;
  collapsible?: boolean;
  expanded?: boolean;
  header: string;
};

function Card({ collapsible, expanded = false, children, header }: Props) {
  const [collapsed, SetCollapsed] = useState(expanded);

  return (
    <div className={`card`}>
      {collapsible ? (
        <div className={`card-collapse-section${collapsed ? '' : ' active'}`}>
          <div
            className="card-collapse-section-header-label"
            onClick={() => SetCollapsed((prev) => !prev)}
          >
            <div className="card-header">{header}</div>

            <span className="card-arrow">{collapsed ? '🔻' : '🔺'}</span>
          </div>

          <div className="card-collapsed-item">
            <div>{children}</div>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default Card;
