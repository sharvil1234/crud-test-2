const http = require('http');

const port = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
    res.write("Hey There World! ");
    const app = require('./app');
    res.end();
});

server.listen(port, ()=>{
    console.log(`Started on port ${port}`);
})