import axios from 'axios';

const KEY = 'Client-ID 95d6d4fc153470f7f5d9361417bb8f07e5da30dd2a57f413b112f394618505f1';
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  params : {
    query:
  },
  headers: {
    Authorization: KEY
  }
})
