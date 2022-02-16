import { MongoClient } from "mongodb";
import { connectToDatabase } from "../../util/mongodb";

const handler = async (req, res) => {
  console.log("here 1");

  const { db } = await connectToDatabase();

  const data = await db.collection("meetups").find({}).limit(20).toArray();

  // if (req.method === "POST") {
  //   console.log("here 2");

  //   const data = req.data;

  //   console.log("here 3");

  //   const client = await MongoClient.connect(
  //     "mongodb+srv://epigie:epigie2018@cluster0.fwhet.mongodb.net/nextmeetups?retryWrites=true&w=majority",
  //     {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     }
  //   );
  //   console.log("here 4");

  //   const db = client.db();

  //   console.log("here 5");

  //   const meetupsCollection = db.collection("meetups");

  //   console.log("here 6");

  //   const result = await meetupsCollection.insertOne(data);

  //   console.log("here 7");

  //   console.log(result);

  //   client.close();

  //   res.status(200).json({ message: "Meetup Inserted successfully" });
  // }

  res.json(data);
};

export default handler;
