const PORT = 3000;

const express = require('express')
const path = require('path')

const app = express();

app.use(express.urlencoded({extended:false}));

app.use("/", express.static("pages"))

let inMemoryData = {
    list: []
}

app.get("/main", (req, res) => {
    let filePath = path.join(__dirname, "pages", "main.html")
    res.sendFile(filePath)
})

app.get("/contact", (req, res) => {
    let filePath = path.join(__dirname, "pages", "contact.html")
    res.sendFile(filePath)
})

app.get("/about", (req, res) => {
    let filePath = path.join(__dirname, "pages", "about.html")
    res.sendFile(filePath)
})

app.get('/hello', (req, res) => {
    res.send('Hello World')
})

app.get('/', (req, res) => {
    res.redirect('/main')
})

app.get('/list', (req, res) => {
    res.send(inMemoryData.list)
})

app.post('/register', (req, res) => {
    inMemoryData.list.push(req.body)
    res.redirect('/list')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})