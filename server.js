const mongoose = require('mongoose');
const dotenv = require('dotenv');
/* eslint no-console:  */
process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception! Shutting down...');
  console.log(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  await mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  });
  console.log('MongoDB connected!!');
  // try {
  // } catch (err) {
  //   console.log('Failed to connect to MongoDB', err);
  // }
};

connectDB();

///// SERVER
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLER REJRECTION! Shutting down...');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
