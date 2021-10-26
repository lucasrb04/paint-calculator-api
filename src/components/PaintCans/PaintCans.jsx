import React from 'react';
import PropTypes from 'prop-types';

const PaintCans = ({ cans }) => {
  const CansTypes = Object.keys(cans);
  const CansValues = Object.values(cans);
  console.log(CansTypes);
  console.log(CansValues);
  return (
    <div className="row m6 s12">
      {CansTypes.map((paintCan, index) => (
        <div key={ paintCan } className="card">
          <div className="card-content">
            <span className="card-title">
              { paintCan }
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

PaintCans.propTypes = {
  PaintCansList: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default PaintCans;
