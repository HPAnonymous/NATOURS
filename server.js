const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
    console.log('MongoDB connected!!');
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
  }
};

connectDB();

///// SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
