import axios from "axios";

const cep = "12228080";
const url = `https://viacep.com.br/ws/${cep}/json`;

axios.get(url)
.then(res => console.log(res.data))
.catch(error => console.log(error.message));
