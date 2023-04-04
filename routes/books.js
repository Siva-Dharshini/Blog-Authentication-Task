const express =require("express")
const router =express.Router()

const DataBase=require("./db")
const database=new DataBase()

router.get("/",(req,res)=>{
    const books=database.read("books")
    res.json(books)
    
})

router.get("/:id", (req,res)=>{
    const id=req.params.id;
    const book=database.read("books, id")
    res.json(book)
})

router.post("/:id", (req,res)=>{
    const data=req.body;
    const book=database.create("books", data)
    res.json(book)    
})


module.export=router