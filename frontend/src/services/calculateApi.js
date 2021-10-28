require('dotenv').config();

const URL_TO_FETCH = process.env.REACT_APP_API_URL;
console.log(URL_TO_FETCH);

const api = async (roomObjInfo) => {
  const response = await fetch(URL_TO_FETCH, {
    method: 'post', // opcional
    mode: 'cors', // opcional
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // The type of data you're sending
    },
    body: JSON.stringify(roomObjInfo), // The data you're sending
  });
  const data = await response.json();
  return data;
};

export default api;
