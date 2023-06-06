import axios from 'axios';

const jwt = 'tu_jwt_aqui';

const config = {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
};

export const login = async (username: string, password: string) => {
    const remoteUrl = 'http://localhost:5002/api/User/Login';
    const json  = {"user":username,"password":password}
    const response = await axios.post(remoteUrl, json);
    return response.data;
};
/*
axios.get('https://api.example.com/data', config)
  .then(response => {
    // Manejar la respuesta
  })
  .catch(error => {
    // Manejar el error
  });
  */