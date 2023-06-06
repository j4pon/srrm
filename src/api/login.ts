import axios from 'axios';

const jwt = 'tu_jwt_aqui';

const config = {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
};

export const login = async (username: string, password: string) => {
    const remoteUrl = 'http://200.60.27.59:8090/api/login';
    const json  = {"email":username,"password":password}
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