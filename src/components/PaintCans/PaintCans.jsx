import React from 'react';
import './PaintCans.css';

import PropTypes from 'prop-types';

const PaintCans = ({ cans }) => {
  const CansTypes = ['18L', '3.6L', '2.5L', '0.5L'];
  const CansValues = Object.values(cans);

  return (
    <div className="paint-container data-container">

      <h4 className="white-text">Values</h4>
      {CansTypes.map((paintCan, index) => (
        <div key={ paintCan } className="card">
          <div className="card-content">
            <span className="card-title">
              { `${paintCan}: ` }
              { CansValues[index] }
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

PaintCans.propTypes = {
  cans: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default PaintCans;
