import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import RoomForm from '../RoomForm/RoomForm';
import PaintCans from '../PaintCans/PaintCans';
import api from '../../services/calculateApi';

import { getData, storeData } from '../../helpers/localStorage';

const App = () => {
  // const initialState = () => getData('data') || [];
  const [cansList, setCansList] = useState({});

  // useEffect(() => {
  //   storeData('data', state);
  //   const date = state.map((obj) => obj.date);
  //   const bmi = state.map((obj) => obj.bmi);
  //   const newData = { date, bmi };
  //   setData(newData);
  // }, [state]);

  const handleChange = async (roomObjInfo) => {
    const paintCans = await api(roomObjInfo);
    setCansList(paintCans);
  };

  // useEffect(() => {
  //   console.log('roomInfo', roomInfo);
  // }, [roomInfo]);
  console.log('cansList', cansList);
  return (
    <div className="container">
      <div className="row center">
        <h1 className="white-text"> Paint Calculator </h1>
      </div>
      <div className="row">
        <div className="col m9 s12">
          <RoomForm change={ handleChange } />
        </div>
      </div>
      <div className="data-container row">
        <div className="row center">
          <h4 className="white-text">Values</h4>
        </div>
        { cansList !== {} && <PaintCans cans={ cansList } /> }
      </div>
    </div>
  );
};

export default App;
