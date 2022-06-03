const express = require('express');
const res = require('express/lib/response');
const { json } = require('express/lib/response');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(morgan('dev'));
app.use(express.json()); // middle use on POST , create new tours
app.use((req, res, next) => {
  console.log('hello from MIDDLEWARE!');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

///// SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//
