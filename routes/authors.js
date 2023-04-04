const express=require("express")
const router=express.Router()


const DataBase=require("./db")
const database=new DataBase()


router.get("/",(req,res)=>{
    const authors=database.read("authors")
    res.json(authors)
    
})

router.get("/:id", (req,res)=>{
    const id=req.params.id;
    const author=database.read("authors", id)
    res.json(author)
})


router.post("/:id", (req,res)=>{
    const data=req.body;
    const author=database.create("authors", data)
    res.json(author)    
})


module.export=router