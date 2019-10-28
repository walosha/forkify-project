import axios from 'axios';
export const API_KEY = '17c52f0f07c9f585b9694591ac790017';

export default axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api'
});
