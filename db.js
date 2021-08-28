const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const intializeDb = () => {
  mongoose.connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  });
  mongoose.connection.on("error", (error) => {
    console.log("DB Connection Error::" + error);
  });
  mongoose.connection.once("open", () => {
    console.log("DB CONNECTION SUCCESS");
  });
};

module.exports = {
  intializeDb,
};
