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

app.listen(port, () => {
  console.log(`Server running on port: ${port}💦`);
});
