import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';

const initialWallValues = {
  wall0: {
    width0: 3,
    height0: 3,
  },
  wall1: {
    width1: 3,
    height1: 3,
  },
  wall2: {
    width2: 3,
    height2: 3,
  },
  wall3: {
    width3: 3,
    height3: 3,
  },
};

const initialOpeningsValues = {
  windows: 3,
  doors: 3,
};

const RoomForm = ({ change }) => {
  const [walls, setwalls] = useState(initialWallValues);
  const [openings, setopenings] = useState(initialOpeningsValues);

  const handleChangeWall = (e) => {
    const { value, name, id } = e.target;
    // função que atualiza o estado
    // a partir do id e do name do input,
    // com o id ele decide se altera o objeto height ou width
    // e com o campo name ele defina qual parede está editando.
    // o parseFloat é para converter o valor em número
    setwalls({
      ...walls,
      [name]: {
        ...walls[name],
        [id]: parseFloat(value),
      },
    });
  };
  const handleChangeOpenings = (e) => {
    const { value, name } = e.target;
    setopenings({
      ...openings,
      [name]: parseFloat(value),
    });
  };

  const formatData = (wall, opening) => {
    const formatedData = {
      walls: [
        {
          width: wall.wall0.width0,
          height: wall.wall0.height0,
        },
        {
          width: wall.wall1.width1,
          height: wall.wall1.height1,
        },
        {
          width: wall.wall2.width2,
          height: wall.wall2.height2,
        },
        {
          width: wall.wall3.width3,
          height: wall.wall3.height3,
        },
      ],
      openings: opening,
    };
    return formatedData;
  };

  const handleSubmit = () => {
    const data = formatData(walls, openings);
    console.log(data);
    change(data);
  };

  return (
    <>
      <div className="walls-especifications">
        <h3 className="white-text "> Walls especifications </h3>
        { Object.keys(walls).map((wall, idx) => (
          <div key={ wall } className="row">
            <div className="col m3 s12">
              <label htmlFor={ `width${idx}` }>
              Width (in meters)
                <input
                  id={ `width${idx}` }
                  name={ wall }
                  prop="width"
                  type="number"
                  min="1"
                  max="15"
                  placeholder="Type the width"
                  value={ walls[wall].width }
                  onChange={ handleChangeWall }
                />
              </label>

            </div>
            <div className="col m3 s12">
              <label htmlFor={ `height${idx}` }>
              Height (in meters)
                <input
                  id={ `height${idx}` }
                  name={ wall }
                  type="number"
                  isRequired="true"
                  min="2.2"
                  placeholder="Type the height"
                  value={ walls[wall].height }
                  onChange={ handleChangeWall }
                />
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="openings-especifications">
        <h3 className="white-text "> Openings especifications </h3>
        { Object.keys(openings).map((opening) => (
          <div key={ opening } className="line">
            <div className="col m3 s12">
              <label htmlFor={ opening }>
            Number of
                {' '}
                { opening }
                <input
                  id={ opening }
                  name={ opening }
                  type="number"
                  placeholder={ `Type the number of the ${opening}` }
                  value={ openings[opening] }
                  onChange={ handleChangeOpenings }
                />
              </label>
            </div>
          </div>
        ))}

      </div>
      <div className="">
        <button
          id="calc-btn"
          className="calculate-btn"
          type="button"
          // disabled={state.weight === '' || state.height === ''}
          onClick={ handleSubmit }
        >
        Calculate PaintCans
        </button>
      </div>
    </>
  );
};

RoomForm.propTypes = {
  change: PropTypes.func.isRequired,
};

export default RoomForm;
