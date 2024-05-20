const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const Contact = require("./models/contact");
mongoose
  .connect("mongodb://127.0.0.1:27017/Lookscout")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.post("/contactForm", async (req, res) => {
  const { name, email, phone, contact, message } = req.body;
  try {
    const form = await Contact.create({
      name,
      email,
      phone,
      contact,
      message,
    });
    res.status(201).json(form);
  } catch (e) {
    console.error("Error during saving contact", e);
    res.status(500).json({ e: "error while creating contact" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
