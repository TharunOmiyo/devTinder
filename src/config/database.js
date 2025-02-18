const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:Ak242DJ61L709pFJ@namastenode.pb80o.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
