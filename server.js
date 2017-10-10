const express = require('express')
const app = express()

app.use(express.static('public'))

function greet (){
    var myArr = ["Hei", "Hello", "Hola", "Hi",]
    var random = myArr[Math.floor(Math.random()*myArr.length)];
    return random;
}

app.get('/random/:id', function(req,res){
    res.send(greet() + " " + req.params.id);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})