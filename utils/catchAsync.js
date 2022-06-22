// eslint-disable-next-line arrow-body-style
module.exports =  (fn) => {
  // function express gonna call
  return (req, res, next) => {
    // called automatically with params this callback receives , function
    fn(req, res, next).catch(next);
  };
};

// fn() return promise
// no way know req res next
// calling async func
// inside catchAsync call fn()
// createTour is function not result of calling function
// wait express call
// catchAsync return another function assign createTour

/*
  
  wrap async func inside catchAsync , function will return a new anonymous func
     return (req, res, next) => {
      // called automatically with params this callback receives , function
      fn(req, res, next).catch(next);
    };
    called when newTour should be created using createTour()
    anonymous func call fn(req, res, next) return promise => error catch pass err into next() global handling middleware
  
    assigned to createTour 
  
    how async work 
  */
