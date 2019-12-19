import axios from 'axios';
import jasonAdapter from 'axios-jsonp'

const api = axios.create({
  baseURL:'https://viacep.com.br/ws/',
  adapter: jasonAdapter,
  callbackParamName: 'zipCode'
});

export default api;

