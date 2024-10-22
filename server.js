const express = require("express");
const sequelize = require("./db");
const controller = require("./controller");
const basicAuth = require('express-basic-auth');
const app = express();
app.use(express.urlencoded({ extended: true }));

//In postman in Authorization tab select Basic Auth then enter below credentials
const auth = basicAuth({
  users: { 'admin': 'password' }, //username:admin  , password:password
  challenge: true, // Sends a WWW-Authenticate header
}); 
// 1-Route to add a new item (POST request)
app.post("/api/books",auth,controller.saveBook);
// 2-Route to retrieve all books
app.get('/api/books', controller.listAllBooks);
// 3-Route to a retrieve specific book
app.get('/api/books/:id',controller.getBookById);
// 4-Route to a modify specific book
app.put('/api/books/:id',auth,controller.updateBook);
// 5-Route to delete an item by ID (DELETE request)
app.delete("/api/books/:id",auth,controller.deleteBook);

// Start the server
const startServer = async () => {
  try {
    const port = 3000;
      await sequelize.sync();
      app.listen(port, () => {
          console.log(`Server is running on http://localhost:${port}`);
      });
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
};

startServer();
