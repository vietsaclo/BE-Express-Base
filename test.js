const axios = require('axios');

axios.post('http://skill21.io/api-listening', {
  "fromTest": "Test01"
})
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log(err);
})