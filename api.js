const express = require("express");
const dbConnect = require("./mongodb");

const app = express();
app.use(express.json());
const port = 5000;

// Read Data from MongoDB
try {
  app.get("/", async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
  });
} catch (err) {
  console.log(err);
}

// Post Data to MongoDb
try {
  app.post("/", async (req, res) => {
    let data = await dbConnect();
    let result = await data.insert(req.body);
    console.log(result);
    res.send(req.body);
  });
} catch (err) {
  console.log(err);
}

// Put Data From MongoDB
try {
  app.put("/:name", async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
      {
        name: req.params.name,
      },    
      { $set: req.body }
    );
    console.log(req.body);
    res.send(result);
  });
} catch (err) {
  console.log(err);
}

app.listen(port, () => {
  console.log(`Server running on port: ${port}💦`);
});
