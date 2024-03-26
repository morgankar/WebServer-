//First we need to import the required modules 
const express = require('express');
const port = 2000;

//Creating an instance of express to access easily
const app = express();

app.get('/', (req,res) => {
    res.send('Hello from server!')
})

app.get('/page1', (req,res) =>{
    res.send('This is page')
})

app.get('/page2', (req,res) =>{
    res.send('This is page 2')
})

app.listen(port, ()=> {
    console.log(`This server is now listening on port ${port}`)
})
