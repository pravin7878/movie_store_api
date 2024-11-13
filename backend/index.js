require("dotenv").config();
const express = require("express");
const connectToDB = require("./src/config/db");
const mongoose = require("mongoose");
const movieRoutes = require("./src/routes/movie.routes");


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())


// wellcome route
app.get("/", (req, res) => {
  res.send("wellcome to the server");
});

// All movie crud routes
app.use("/", movieRoutes);

// Error hendeling middel ware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "500 - Internal Server Error",
    error: "An unexpected error occurred on the server.",
  });
});

// 404 route handler for undefined routes
app.use((req, res, next) => {
    res.status(404).json({
        message: '404 - Not Found',
        error: 'The requested resource could not be found on this server.'
    });
});


const connectionStatuses = [
  "Disconnected", // 0
  "Connected", // 1
  "Connecting", // 2
  "Disconnecting", // 3
];

app.listen(port, async () => {
  console.log(`server is runing on http://localhost:${port}`);
  try {
    await connectToDB();
    const status = mongoose.connection.readyState;
    console.log(`DB ${connectionStatuses[status]} success`);
  } catch (error) {
    const status = mongoose.connection.readyState;
    console.log(`DB ${connectionStatuses[status]} fallud`);
    console.log(error);
    
  }
});

