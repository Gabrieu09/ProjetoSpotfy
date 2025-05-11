// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://projetoSpotfy:Gab1502@cluster0.xz0m4lx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

 export const db = client.db("projetoSpotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
