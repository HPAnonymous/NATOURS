const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// const connectDB = async () => {
//   try {
//     await mongoose.connect(DB, {
//       useNewUrlParser: true,
//       // useCreateIndex: true,
//       // useFindAndModify: false,
//     });
//     console.log('MongoDB connected!!');
//   } catch (err) {
//     console.log('Failed to connect to MongoDB', err);
//   }
// };

// connectDB();

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Date successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Date successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// if (process.argv[2] === '--import') {
//   importData();
// } else if (process.argv[2] === '--delete') {
//   deleteData();
// }

(async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    });
    console.log('MongoDB connected!!');
    if (process.argv[2] === '--import') {
      importData();
    } else if (process.argv[2] === '--delete') {
      deleteData();
    } else {
      console.log("please specity '--import' or '--delete'");
    }
    // await mongoose.disconnect();
  } catch (err) {
    console.log(err);
  }
})();
