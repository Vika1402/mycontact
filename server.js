const express = require("express");
 // Invoking express() to create an Express application
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorhandler");
const { connect } = require("mongoose");
const connectDb = require("./dbconnection");
connectDb();
const app = express();

const port = process.env.PORT || 3000; // Change 5000 to another available port, like 3000
app.use(express.json());

app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
