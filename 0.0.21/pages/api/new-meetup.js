import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://yogo3r3n:E1r2e3n4@cluster0.nzmeksr.mongodb.net/meetups?retryWrites=true&w=majority",
      { useUnifiedTopology: true } // Add this option
    );
    const db = client.db("Meetups"); // Use the existing 'Meetups' database

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
