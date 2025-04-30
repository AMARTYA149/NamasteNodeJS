
// NOTES
// Go to mongodb website
// Create a free MO cluster
// Create a user
// Get the connection string
// Install Mongo DB compass

const { MongoClient } = require("mongodb");

const URL = 'mongodb+srv://namastenodejs-amar:SGzPGIqdx2ZDHgwl@namastenodejs-amartya.n7zdaxt.mongodb.net/';

const client = new MongoClient(URL);

const dbName = "HelloWorld";

async function main(){
    await client.connect();
    console.log("Connected successfully to the database server!!");

    const db = client.db(dbName);
    const collection = db.collection("User");

    return "done.";
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
