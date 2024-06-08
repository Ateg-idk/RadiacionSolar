// server.mjs
import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});
// starts a simple http server locally on port 3000
server.listen(80, '127.0.0.1', () => {
  console.log('Bienvenidos a Radiaciones Solares');
});
// run with `node server.js`