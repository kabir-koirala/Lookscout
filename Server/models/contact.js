const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    contact: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { versionKey: false }
);
const contactModel = mongoose.model("contact", contactSchema);
module.exports = contactModel;
