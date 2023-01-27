const express = require('express')

const path = require('path')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'))
app.get('/', (req, res) => {
  res.render('index',{
    title: "node class"
  })
})
//app.usestatic(path.join(__dirname, 'public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})