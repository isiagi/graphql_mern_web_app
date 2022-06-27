const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URL);

  console.log(
    `MongoDB Connected to ${connection.connection.host}`.cyan.underline.bold
  );
};

module.exports = connect