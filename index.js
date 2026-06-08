const express = require('express');
const app = express();
const port = 3000;

app.get('/',async (req,res)=>{
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`IP address: ${ip}`);
    res.send(`Your IP address is: ${ip}`);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})