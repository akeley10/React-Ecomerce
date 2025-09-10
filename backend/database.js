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




app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('Servidor Express funcionando 🚀');
});

// Arrancar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("Datos recibidos en login:", req.body);
  let sql = "Select * from users where email = ? && password = ? ";
    connection.query(sql, [email,password], (err,results)=>{
      if (results.length === 0) {
        return res.status(401).json({ success: false, message: "Email o Contraseña incorrecta" });
      }
      const user = results[0];
      if (user.password === password && user.email === email){
        res.status(200).json({
          success: true,
          email: user.email    
        });
      }else{
        return res.status(401).json({ success: false, message: "Contraseña incorrecta" });
      }

    });
  
});


app.post('/register', (req, res) => {
  const { email, password } = req.body;
  console.log("Datos recibidos en registro:", req.body);
  res.status(200).json({
    success: true,
    email: req.body.email || 'Email no recibido',
    password: req.body.password || 'Contraseña no recibida',
  });
  let sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  connection.query(sql, [email,password]);

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
      success_url: 'http://localhost:5173/completed',
      cancel_url: 'http://localhost:5173/cancel',
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Error al crear sesión:', err);
    res.status(500).json({ error: 'No se pudo crear la sesión' });
  }
});

