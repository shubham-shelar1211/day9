import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  // Executing the Query
  const db = client.db("mydb");
  const messageColl = db.collection("message");
  await messageColl.insertOne({ message: "HI I am Node!" });

  // closing conn.
  await client.close();
  console.log("Record Added!");
}

main();