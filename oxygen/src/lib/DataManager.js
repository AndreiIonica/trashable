import axios from 'axios';
// import Vue from 'vue';

const URL = 'https://trashable-server.herokuapp.com';
// const URL = 'http://localhost:4200';
// if (Vue.config.devtools === true) {
//   URL = 'http://localhost:4200';
// }

async function signup(email, password, name) {
  const res = await axios.post(`${URL}/api/v1/auth/signup`, {
    email,
    password,
    name,
  });
  return res.data.token;
}
async function login(email, password) {
  const res = await axios.post(`${URL}/api/v1/auth/login`, {
    email,
    password,
  });
  return res.data.token;
}

async function creareCos(trashcan, token) {
  const res = await axios.post(`${URL}/api/v1/trashcan/`, trashcan, {
    headers: {
      'auth-token': token,
    },
  });
  return res.data;
}
async function updatareCos(trashcan, token) {
  const res = await axios.put(`${URL}/api/v1/trashcan/`, trashcan, {
    headers: {
      'auth-token': token,
    },
  });
  return res.data;
}
async function toateCosurile() {
  const res = await axios.get(`${URL}/api/v1/trashcan/`);
  return res.data;
}

async function tipuriCosuri() {
  const res = await axios.get(`${URL}/api/v1/trashcanType/`);
  return res.data;
}

async function orase() {
  const res = await axios.get(`${URL}/api/v1/city/`);
  return res.data;
}

// prettier-ignore
export {
	signup,
	login,
	creareCos,
	updatareCos,
	toateCosurile,
	tipuriCosuri,
	orase,
};
