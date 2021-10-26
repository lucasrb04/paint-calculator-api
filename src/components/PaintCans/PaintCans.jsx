import React from 'react';
import PropTypes from 'prop-types';

const PaintCans = (PaintCansList) => (
  <div className="col m6 s12">
    <div className="card">
      <div className="card-content">
        {/* <span className="card-title" data-test="bmi">
            BMI:
          {' '}
          {bmi}
        </span>
        <div className="card-data">
          <span data-test="weight">
              Weight:
            {' '}
            {weight}
            {' '}
              kg
          </span>
          <span data-test="height">
              Height:
            {' '}
            {height}
            {' '}
              cm
          </span>
          <span data-test="date">
              Date:
            {' '}
            {date}
          </span>
        </div> */}
      </div>
    </div>
  </div>
);

PaintCans.propTypes = {
  PaintCansList: PropTypes.objectOf(PropTypes.string),
};

export default PaintCans;
