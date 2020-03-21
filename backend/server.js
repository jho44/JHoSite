const express = require('express')
const server = express();
const cors = require("cors")

// use body-parser middleware 
// to encode req body sent by client 
const body_parser = require('body-parser')
const port = 4000
server.use(cors())
server.use(body_parser.json()) // parse JSON

// database > collection > documents

// << db setup >>
const db = require("./db") // import db.js for initialize func
const dbName = "data"
const collectionName = "movies"

// << db init >>
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
        /* 
            collection.find() returns a cursor (i.e. iterator)
            then convert cursor to array w/ toArray(callback)
            callback runs after successfully converting cursor to array
            this is where code for returning response to client would go
        */
        if (err) throw err
            console.log(result)
    })

    // << db CRUD routes >>
    server.post("/items", (req, response) => {
        const item = req.body // item parsed from req.body by body_parser 
        dbCollection.insertOne(item, (err, result) => { // callback of insertOne
            // note: result is _ (aka boolean for success) + _id of inserted doc
            if (err) throw err
            // return updated list
            dbCollection.find().toArray((_err, _result) => { // callback of find
                // get updated list w/ find()
                if (_err) throw _err
                response.json(_result)
            })
        })
    })

    server.get("/items/:id", (req, response) => {
        const itemId = req.params.id
        dbCollection.findOne({ id: itemId }, (err, result) => {
            if (err) throw err
            response.json(result) // return item
        }) // query object in ()
        // can be { id: 1 }, { name: "The Lion King" }, { id: 1, name: "The Lion King", genre: "action" }
    })

    server.get("/items", (req, response) => {
        // return whole, most up-to-date list
        dbCollection.find().toArray((err, result) => {
            if (err) throw err
            response.json(result)
        })
    })

    server.put("/items/:id", (req, response) => {
        const itemId = req.params.id
        const item = req.body
        console.log("Editing item: ", itemId, " to be ", item)
                                    // use of {$set: item} is MongoDB-specific
        dbCollection.updateOne({ id: itemId }, { $set: item }, (err, result) => {
            if (err) throw err
            // send back entire updated list
            // ensures frontend data up-to-date
            dbCollection.find().toArray(function(_err, _result) {
                if (_err) throw _err
                response.json(_result)
            })
        })
    })

    server.delete("/items/:id", (req, response) => {
        const itemId = req.params.id
        console.log("Delete item with id: ", itemId)

        dbCollection.deleteOne({ id: itemId }, function(err, result) {
            if (err) throw err
            // send back entire updated list after successful req
            dbCollection.find().toArray(function(_err, _result) {
                if (_err) throw _err
                response.json(_result)
            })
        })
    })
    
}, function(err) { // failureCallback
    throw(err)
})

/* personal notes: 
    GET: return stuff from existing data set
    POST: add stuff to existing data set
        in request body
    PUT: update sth in existing data set
    DELETE
*/

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

