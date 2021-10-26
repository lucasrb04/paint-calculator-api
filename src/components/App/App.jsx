import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import CalcForm from '../CalcForm/CalcForm';
import PaintCans from '../PaintCans/PaintCans';

import { getData, storeData } from '../../helpers/localStorage';

const App = () => {
  const initialState = () => getData('data') || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  useEffect(() => {
    storeData('data', state);
    const date = state.map(obj => obj.date);
    const bmi = state.map(obj => obj.bmi);
    let newData = { date, bmi };
    setData(newData);
  }, [state]);

  return (
    <div className='container'>
      <div className='row center'>
        <h1 className='white-text'> Paint Calculator </h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
          <CalcForm />
          <div>
            <div className='row center'>
              <h4 className='white-text'>Pai</h4>
            </div>
            <div className='data-container row'>
              { state.length > 0 && <PaintCans /> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
