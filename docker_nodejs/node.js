const http = require('http');

// Создаем простой сервер
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Привет! Это базовый сервер Node.js\n');
});

// Сервер слушает порт 3000
server.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000/');
});
