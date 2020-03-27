const express = require("express")
const bookModel = require("../models/book")
const app = express()

app.post("/book", async (req, res) => {
    const book = new bookModel(req.body)

    try {
        await book.save()
        res.send(book)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.get("/books", async (req, res) => {
    const books = await bookModel.find({})

    try {
        res.send(books)
    } catch (err) {
        res.status(500).send(err)
    }
})

// app.get("/items", (req, response) => {
//     // return whole, most up-to-date list
//     dbCollection.find().toArray((err, result) => {
//         if (err) throw err
//         response.json(result)
//     })
// })

// app.put("/items/:id", (req, response) => {
//     const itemId = req.params.id
//     const item = req.body
//     console.log("Editing item: ", itemId, " to be ", item)
//                                 // use of {$set: item} is MongoDB-specific
//     dbCollection.updateOne({ id: itemId }, { $set: item }, (err, result) => {
//         if (err) throw err
//         // send back entire updated list
//         // ensures frontend data up-to-date
//         dbCollection.find().toArray(function(_err, _result) {
//             if (_err) throw _err
//             response.json(_result)
//         })
//     })
// })

// app.delete("/items/:id", (req, response) => {
//     const itemId = req.params.id
//     console.log("Delete item with id: ", itemId)

//     dbCollection.deleteOne({ id: itemId }, function(err, result) {
//         if (err) throw err
//         // send back entire updated list after successful req
//         dbCollection.find().toArray(function(_err, _result) {
//             if (_err) throw _err
//             response.json(_result)
//         })
//     })
// })

module.exports = app