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

    const data = {
        firstName: "Swati",
        lastName: "Rani",
        city: "Bengaluru"
    }

    //WRITE
    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);
  

    // READ
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    //COUNT
    const countResults = await collection.countDocuments({});
    console.log("Count of documents in the User collection: ", countResults);

    //Find all documents with filter of firstname a Swati
    const filterResults = await collection.find({firstName : 'Swati'}).toArray();
    console.log("Filter results with Firstname as Swati: ", filterResults);

    //UPDATE
    const updateResult = await collection.updateOne({ firstName : 'Swati' }, { $set: { homeTown: "Bokaro"} });
    console.log('Updated documents =>', updateResult);


    return "done.";
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
