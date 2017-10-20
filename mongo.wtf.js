"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {

  //error statement
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to MongoDB: ${MONGODB_URI}`);

  db.collection('tweets').find({}, (err, result) => {

    if(err) throw err;

    console.log('find result: ' + result)
    console.log('typeof result: ' + typeof result);

    console.log('for each item yirlded by the cursor:');
    result.toArray((err, resultsArray) => {
      console.log('results.toArray: ', resultsArray);
    })

  db.close();
  })


});