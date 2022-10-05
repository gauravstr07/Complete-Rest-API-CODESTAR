const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/e-comm";
const database = "e-comm";
const client = new MongoClient(url);


//Getting data from MongoDB
async function dbConnect() {
    try {
      let result = await client.connect();
      let db = result.db(database);
      return db.collection("products");
    } catch (error) {
      console.log("😥" + error);
    }
  }
  
  module.exports = dbConnect;