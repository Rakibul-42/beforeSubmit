const MongoClient = require('mongodb').MongoClient;

// Connection URL and Database Name
const url = 'mongodb://localhost:27017'; // Change this to your MongoDB server URL
const dbName = 'your-database-name'; // Change this to your database name

// Create a new MongoDB client
const client = new MongoClient(url, { useNewUrlParser: true });

// Function to perform MongoDB queries
async function performQueries() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Get a reference to the database
    const db = client.db(dbName);

    // Create a new collection
    const newCollectionName = 'newCollection';
    await db.createCollection(newCollectionName);
    console.log(`Collection "${newCollectionName}" created successfully.`);

    // Remove a collection from the database
    const collectionToDelete = 'collectionToDelete';
    await db.dropCollection(collectionToDelete);
    console.log(`Collection "${collectionToDelete}" removed successfully.`);

    // Insert a single document into a collection
    const collectionName = 'your-collection-name';
    const collection = db.collection(collectionName);
    const documentToInsert = { key: 'value' }; // Replace with your document data
    await collection.insertOne(documentToInsert);
    console.log('Document inserted successfully.');

    // Delete/remove a single document from the collection
    const filter = { key: 'value' }; // Replace with your filter criteria
    await collection.deleteOne(filter);
    console.log('Document deleted successfully.');
  } catch (err) {
    console.error('Error performing MongoDB queries:', err);
  } finally {
    // Close the MongoDB client
    await client.close();
  }
}

// Call the function to perform the queries
performQueries();
