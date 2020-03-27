const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    release_date: String, // YYYY-MM-DD
    summary: String
})

const Book = mongoose.model("Book", bookSchema)
module.exports = Book