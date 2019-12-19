import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 
      'Bearer GQQ5d2gzKWoPx_25LsGAbQ4F1j6Jro2b1bKeb5E0Zj0BhRPp9f3gj-LFZWJSOexC5cQBlm01Qy72Xg_IjJr8JHNc6LXi4lQW4w8uGdkY1XDcC0GEnL9NpsIQqpf2XXYx'
  }
});