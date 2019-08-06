
const express = require('express');
const cors = require('cors')
const server = express();
const names = [
  {
    "name": "zack"
  },
  {
    "name": "rob"
  },
  {
    "name": "fred"
  }
];
const favFoods = [
  {
    "food": "pizza",
    "age": 2
  },
  {
    "food": "watermelon",
    "age": 3
  },
  {
    "food": "pancakes",
    "age": 6
  }
];

server.use(cors());

server.get('/names', function (req, res) {
  res.send(names);
})


server.listen(3001,()=>{
  console.log("carrier has arrived");
})
// server.listen(80, () => {
//   console.log('CORS-enabled web server listening on port 80')
// })
