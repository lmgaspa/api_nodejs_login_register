const express = require('express');
const AuthController = require('./src/controllers/AuthController.js');
const AdminController = require('./src/controllers/AdminController')
const authenticateMiddleware = require('./src/middlewares/authenticate')
const cors = require('cors');
const swaggerRoute = require('./src/routes/swagger.route.js')
const app = express();
const connectDB = require('./src/database/index.js')

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin: *', 'https://dianaglobal.com.br', 'localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  connectDB();

app.use('/doc', swaggerRoute)
app.use('/auth', AuthController)
app.use('/admin', authenticateMiddleware, AdminController)

app.listen(10000, () => {
    console.log('Server is running!');
})