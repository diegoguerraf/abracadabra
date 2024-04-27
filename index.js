import express from 'express';
import path from 'path';
import usuarios from './assets/js/usuarios.js';
import validar from './middleware/validar.js';

const app = express();
const PORT = 5500;

const __dirname = path.resolve();

app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor de Abracadabra!✨');
});

app.use(express.static('assets'));

app.get('/abracadabra/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/abracadabra/juego/:usuario', validar, (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/abracadabra/conejo/:n', (req, res) => {
  const numero = Math.floor(Math.random() * (5 - 1)) + 1;
  const num = +req.params.n; // Convertir a número el parámetro de la URL con el signo +
  //   const { n: num } = req.params;
  if (num == numero) {
    res.sendFile(__dirname + '/assets/img/conejito.jpg');
  } else {
    res.sendFile(__dirname + '/assets/img/voldemort.jpg');
  }
});

app.get('*', (req, res) => {
  res.send(
    `<center><br><h1> Lo sentimos, esta página no existe 😢</h1></center>`
  );
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
