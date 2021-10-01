import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@technotesapp.69dbx.mongodb.net/technotesappdb?retryWrites=true&w=majority`
    );
    const db = client.db();

    const notesCollection = db.collection("technotes");

    const result = await notesCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Note inserted" });
  }
}

export default handler;
