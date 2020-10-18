import axios from 'axios';
let Data
(async ()=>{
  Data = await axios.get('/user');
})()

export default Data;