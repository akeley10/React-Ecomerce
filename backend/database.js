const express = require('express');
const Stripe = require('stripe');
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

const stripe = Stripe('sk_test_51RzmV51ddpsbF4YJJnT62Dxrro3EgGhDM7Ok6ksxQta7jibi5T4T2KvK9fbb30V1NUilw2n69zAk6UB0uoG6x2Wp002VzD1kWo');
const bcrypt = require('bcrypt');



app.use(cors({ origin: 'https://react-ecomerce.akeley10lol.workers.dev/' }));
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('Servidor Express funcionando 🚀');
});

// Arrancar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en https://react-ecomerce.akeley10lol.workers.dev/:${port}`);
});



app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Datos recibidos en login:", req.body);

    connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ success: false, message: "Error en el servidor" });
        }

        if (results.length === 0) {
          return res.status(401).json({ success: false, message: "Email o contraseña incorrecta" });
        }

        const user = results[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          return res.status(401).json({ success: false, message: "Email o contraseña incorrecta" });
        }
        res.status(200).json({
          success: true,
          email: user.email,
          message: "Login correcto"
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});



app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  console.log("Datos recibidos en registro:", req.body);
  let passwordEncripted = await bcrypt.hash(password,10);
  
  connection.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, passwordEncripted],
    (err, result) => {
      if (err) {
        console.error("Error al insertar usuario:", err);
        return res.status(500).json({ success: false, message: "Error al registrar usuario" });
      }

      res.status(200).json({
        success: true,
        email,
        message: "Usuario registrado correctamente"
      });
    }
  );
});


app.post('/create-checkout-session', async (req, res) => {
  const { cart, email } = req.body;

  try {
    const line_items = cart.map(product => ({
      price: product.priceId,
      quantity: product.count,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items,
      success_url: 'https://react-ecomerce.akeley10lol.workers.dev/completed',
      cancel_url: 'https://react-ecomerce.akeley10lol.workers.dev/cancel',
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Error al crear sesión:', err);
    res.status(500).json({ error: 'No se pudo crear la sesión' });
  }
});


app.post("/send-products", async (req, res) => {
  try {
    const products = await stripe.products.list({
      expand: ["data.default_price"]
    });
    
    const simplified = products.data.map(p => ({
      id: p.id,
      name: p.name,
      image: p.images[0],
      price: p.default_price.unit_amount
    }));
    res.json(simplified);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener productos de Stripe" });
  }
});