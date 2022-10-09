// POST api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const { title, image, address, description } = data;
    try {
      const client = await MongoClient.connect(process.env.DB_HOST);
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log(result);

      client.close();
    } catch (err) {
      console.error(err);
    }

    res.status(201).json({ message: "success" });
  }
};

export default handler;
