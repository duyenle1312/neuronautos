// POST api/new-order
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const { title, image, address, description } = data;
    try {
      const client = await MongoClient.connect(process.env.DB_HOST);
      const db = client.db();
      const ordersCollection = db.collection("orders");
      const result = await ordersCollection.insertOne(data);
      console.log(result);

      client.close();
    } catch (err) {
      console.error(err);
    }

    res.status(201).json({ message: "success" });
  }
};

export default handler;
