require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.talr0yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  // await client.connect();
  const foodCollection = client.db("comfortDB").collection("foods");
  try {
    app.get("/all-foods", async (req, res) => {
      const result = await foodCollection.find().toArray();
      res.send(result);
    });

    app.get("/featured", async (req, res) => {
      const query = { status: "Available" };
      const options = {
        sort: { expired_date: -1 },
      };
      const result = await foodCollection.find(query, options).toArray();
      res.send(result);
    });

    app.get("/food/:id", async (req, res) => {
      const params = req.params.id;
      const id = { _id: new ObjectId(params) };
      const result = await foodCollection.findOne(id);
      res.send(result);
    });

    app.post("/add-food", async (req, res) => {
      const body = req.body;
      const result = await foodCollection.insertOne(body);
      res.send(result);
    });

    app.get("/my-food/:email", async (req, res) => {
      const email = req.params.email;
      const query = { user_email: email };
      const result = await foodCollection.find(query).toArray();
      res.send(result);
    });

    app.put("/update-food/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const query = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: data,
      };
      const result = await foodCollection.updateOne(query, updatedDoc);
      res.send(result);
    });

    app.delete("/food/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await foodCollection.deleteOne(query);
      res.send(result);
    });

    // something related to ping/admin. Comment that line also.

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
