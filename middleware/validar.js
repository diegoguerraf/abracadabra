import usuarios from '../assets/js/usuarios.js'

const validar = (req, res, next) => {
  const { usuario } = req.params;
  const validar = usuarios
    .map((u) => u.toLowerCase())
    .includes(usuario.toLowerCase());
  if (validar) {
    next();
  } else {
    res.sendFile(__dirname + '/assets/img/who.jpeg');
  }
};

export default validar;
