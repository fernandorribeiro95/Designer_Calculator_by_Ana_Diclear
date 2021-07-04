const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.set("view engine", "njk")

app.use(express.static('public'))

nunjucks.configure("views", {
    express: app
})

// Routes
app.get('/', (req, res) => {
    res.send("Hello World")
})




app.listen(3000)