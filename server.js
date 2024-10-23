const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Code de réponse OK
  res.setHeader('Content-Type', 'text/html'); // Type de contenu HTML
  res.end('<h1>Hello Node !!!!</h1>\n'); // Réponse
});

server.listen(port, hostname, () => {
  console.log(`Serveur en cours d'exécution à http://${hostname}:${port}/`);
});
