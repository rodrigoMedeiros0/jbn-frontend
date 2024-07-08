import axios from "axios";

// Configura a baseURL do Axios
axios.defaults.baseURL = "http://localhost:5000/";



// Configura o tempo limite para as requisições
axios.defaults.timeout = 10000;

export default axios;
