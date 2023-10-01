import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://yogo3r3n:<E1r2e3n4>@cluster0.nzmeksr.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    // const db = client.db();
    // const meetupsCollection = db.collection("meetups");
    // meetupsCollection.insertOne(data);

    const result = await client.db.collection("meetups").insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
