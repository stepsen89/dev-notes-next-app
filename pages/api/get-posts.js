import { MongoClient } from "mongodb";


async function handler(req, res) {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@technotesapp.69dbx.mongodb.net/technotesappdb?retryWrites=true&w=majority`
    );
    const db = client.db();

    // const notesCollection = db.collection("technotes");

      const list = await db
    .collection("technotes")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

    client.close();

    console.log(list);

    res.status(201).json(list);
}

export default handler;
