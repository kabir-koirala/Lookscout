const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect("mongodb://127.0.0.1:27017/Lookscout")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });





  
  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});