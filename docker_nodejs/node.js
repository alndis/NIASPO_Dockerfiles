const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Node.js Server is running\n');
  res.write(`Operating System: ${os.type()}\n`);
  res.write(`Node.js Version: ${process.version}\n`);
  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
