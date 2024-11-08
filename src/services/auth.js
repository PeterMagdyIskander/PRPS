import {store} from '../store/index.js'
import axios from 'axios'
// Create an axios instance
// Base API URL
const apiUrl = 'http://localhost:3000/';

const instance = axios.create({
    baseURL: apiUrl,
  });
  
// Login method
export const login = (email, password) => {
    return instance.post('users/login', {
      email,
      password
    });
  };