import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';

const initialValues = {
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

const CalcForm = ({ change }) => {
  const [state, setState] = useState(initialValues);

  const handleChangeWall = (e) => {
    const { value, name, id } = e.target;
    // função que atualiza o estado
    // a partir do id e do name do input,
    // com o id ele decide se altera o objeto height ou width
    // e com o campo name ele defina qual parede está editando.
    // o Radix(+) é para converter o valor em número
    setState({
      ...state,
      [name]: {
        ...state[name],
        [id]: parseFloat(value),
      },
    });
  };

  const formatData = (data) => {
    const formatedData = {
      walls: [
        {
          width: data.wall0.width0,
          height: data.wall0.height0,
        },
        {
          width: data.wall1.width1,
          height: data.wall1.height1,
        },
        {
          width: data.wall2.width2,
          height: data.wall2.height2,
        },
        {
          width: data.wall3.width3,
          height: data.wall3.height3,
        },
      ],
    };
    return formatedData;
  };

  const handleSubmit = () => {
    const data = formatData(state);
    change(data);
  };

  return (
    <>
      { Object.keys(state).map((wall, idx) => (
        <div key={ wall } className="row">
          <div className="col m6 s12">
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
                value={ state[wall].width }
                onChange={ handleChangeWall }
              />
            </label>

          </div>
          <div className="col m6 s12">
            <label htmlFor={ `height${idx}` }>
              Height (in meters)
              <input
                id={ `height${idx}` }
                name={ wall }
                type="number"
                min="2.2"
                placeholder="Type the height"
                value={ state[wall].height }
                onChange={ handleChangeWall }
              />
            </label>
          </div>
        </div>
      ))}

      <div className="center">
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

CalcForm.propTypes = {
  change: PropTypes.func.isRequired,
};

export default CalcForm;
