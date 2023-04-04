//Routes, Router -organize routes or endpoints in express into multiple files

/**
 * book
 * - GET /books
 * - GET /books/:id
 * - POST /books
 * author
 * - GET /authors
 * - GET /author/:id
 * - POST /authors
 */

const express = require("express")
const server =express()

const booksRouter =require("./routes/books")
const authorsRouter=require("./routes/authors")

server.use(express.json())

server.use("/books", booksRouter)
server.use("/authors", authorsRouter)




