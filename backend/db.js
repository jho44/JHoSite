// mongodb driver
const MongoClient = require("mongodb").MongoClient
const dbConnectionUrl = "mongodb+srv://jho44:Firefly6263@cluster0-7naph.mongodb.net/test?retryWrites=true&w=majority"

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, 
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
        function(err, dbInstance) {
            if (err) {
                console.log(`[MongoDB connection] ERROR: ${err}`)
                failureCallback(err)
            } else {
                const dbObject = dbInstance.db(dbName)
                const dbCollection = dbObject.collection(dbCollectionName)
                console.log("[MongoDB connection] SUCCESS")

                successCallback(dbCollection)
            }
    })
}

module.exports = {
    initialize
}