import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
  // this is a fun API to learn with, enjoy :)  
    Authorization:
      'Bearer _OelRiWGwgDMtfBaC7c1ONqHrCNXbDYHp_V4pF1vAS6yBC2Yn5dT16DKpMwTEe10lXk0FJ6oEBMiPYQNvJ15fOqkrOJ5mE1pOQK_jQpRGHFuyCBIxsDehAa4VE4VY3Yx',
  },
});
