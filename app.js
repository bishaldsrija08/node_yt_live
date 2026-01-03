const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Welcome to the Home Page hello hi"
    })
})

app.get("/about", (req,res)=>{
    res.send("About Us Page")
})

app.post("/register", (req,res)=>{
    console.log(req.body.name)
    res.send("User Registered Successfully")
})

app.delete("/delete", (req,res)=>{
    res.send("User Deleted Successfully")
})

app.patch("/update", (req,res)=>{
    res.send("User Updated Successfully")
})

app.get("/ig/:username", (req,res)=>{
    const id = req.params.username
    res.send(`Welcome to ${id}'s Instagram Page`)
})

app.get("/search", (req,res)=>{
    const q = req.query.hit
    res.send(`You searched for ${q}`)
})

// Server setup
const port = 3000
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})