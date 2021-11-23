const http = require('http');
const url = require('url');
const fs= require('fs');
const path = require('path');
//const { db } = require('./db');
require('dotenv').config();

const db = fs.readFileSync(path.join(__dirname, 'db.json'));
const data1 = JSON.parse(db);

const PORT = process.env.PORT;
//const test = fs.readFile(path.join(__dirname, 'test.html'))



const server = http.createServer((req, res) => {

  if (req.url === '/') {
   fs.readFile(path.join(__dirname, 'test.html'), (err, data) => {
     if (err) throw err;
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data);
   })
  }

  if (req.url === '/person') {
    
    res.end(JSON.stringify(data1));
  }

});

server.listen(PORT, ()=>{
  console.log(`App is running on http://localhost:${PORT}`)
});