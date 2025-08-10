const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react-ecomerce'
})


app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json()); 


// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando 🚀');
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log("Datos recibidos:", email, password);


});
// Arrancar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
