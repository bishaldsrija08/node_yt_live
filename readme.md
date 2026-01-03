npm init -y
npm install express
Make app.js file with the following content:
const express = require('express');
const app = express();




// Server setup
const port = 3000
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})