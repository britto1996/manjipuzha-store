const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.wgjmp.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log(`DB CONNECTED ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`error ${error}`.red.underline.bold);
  }
};

module.exports = connectDB;
