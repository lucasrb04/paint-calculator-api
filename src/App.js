import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import RoomForm from './components/RoomForm/RoomForm';
import PaintCans from './components/PaintCans/PaintCans';
import api from './services/calculateApi';

const App = () => {
  const [cansList, setCansList] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = async (roomObjInfo) => {
    const paintCans = await api(roomObjInfo);
    if (paintCans.message) {
      const TIME_ERR = 3000;
      setErrorMsg(paintCans.message);
      setTimeout(() => { setErrorMsg(''); }, TIME_ERR);
    } else {
      setCansList(paintCans);
    }
  };

  return (
    <div className="container">
      <h5 className="white-text center">{errorMsg}</h5>
      <div className="row card">
        <h1 className="white-text center"> Paint Calculator </h1>
        <div className="container1">
          <div className="col m12">
            <RoomForm change={ handleChange } />
          </div>
          <PaintCans cans={ cansList } />
        </div>
      </div>
    </div>
  );
};

export default App;
