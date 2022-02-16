import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.data;
    console.log("data", data);

    const client = await MongoClient.connect(
      "mongodb+srv://epigie:epigie2018@cluster0.fwhet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const db = client.db("next_meetups");

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted successfully" });
  }
}

export default handler;
