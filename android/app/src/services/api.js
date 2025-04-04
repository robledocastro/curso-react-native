import axios from "axios";

//https://sujeitoprogramador.com/r-api/?api=filmes - baseUrl

//r-api/?api=filmes - rota

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;