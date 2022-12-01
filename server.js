const http = require('http');
const app = require('./app');

const port = process.env.PORT || 9950;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Aplikacija je aktivna na adresi http://localhost:${port}`);
});
