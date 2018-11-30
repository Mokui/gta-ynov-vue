var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb:http://b7vvj1ozrmdupn8-mongodb.services.clever-cloud.com', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));