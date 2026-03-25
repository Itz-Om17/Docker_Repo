const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection URL
const url = "mongodb://root:1234566@localhost:27017";
const client = new MongoClient(url);

// Database + Collection
const dbName = "sample";
let db;

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        db = client.db(dbName);
    } catch (err) {
        console.error("DB Connection Error:", err);
    }
}

connectDB();
// Route to get all users
app.get("/users", async (req, res) => {
    try {
        const collection = db.collection("person");

        // Fetch all users
        const users = await collection.find({}).toArray();

        res.json({
            message: "Users fetched successfully",
            data: users
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching users" });
    }
});
// Route to add user
app.post("/add-user", async (req, res) => {
    try {
        const user = req.body;

        const collection = db.collection("person");

        const result = await collection.insertOne(user);

        res.json({
            message: "User added successfully!",
            id: result.insertedId
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error adding user" });
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});