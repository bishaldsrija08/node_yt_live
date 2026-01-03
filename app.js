const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// require jwt
const jwt = require("jsonwebtoken")

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Home Page hello hi"
    })
})

app.get("/about", (req, res) => {
    res.send("About Us Page")
})

app.post("/register", (req, res) => {
    console.log(req.body.name)
    res.send("User Registered Successfully")
})

app.delete("/delete", (req, res) => {
    res.send("User Deleted Successfully")
})

app.patch("/update", (req, res) => {
    res.send("User Updated Successfully")
})

app.get("/ig/:username", (req, res) => {
    const id = req.params.username
    res.send(`Welcome to ${id}'s Instagram Page`)
})

app.get("/search", (req, res) => {
    const q = req.query.hit
    res.send(`You searched for ${q}`)
})


// login route

let pass = "admin123"
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            message: "Username and Password are required"
        })
    }
    if (password !== pass) {
        return res.status(401).json({
            message: "Invalid Password"
        })
    }

    // create a token
    const token = jwt.sign({id: username}, "mysecretkey", {expiresIn: "30d"})
    res.status(200).json({
        message: "Login Successful",
        data: token
    })

})

// Server setup
const port = 3000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})