const express = require('express')
const path = require('path')
var request = require('request');
// const api = require('./server/routes/api')
const app = express()
//======================================================================
// https://recipes-goodness.herokuapp.com/recipes/oil
//{ results: [RECIPES] }
//----------------------------------
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
// app.use('/',api)
const port = 8080
let recipesArr=[]
app.get('/recipes/:ingredient',function(req,res){
    let i = req.params.ingredient
    request('https://recipes-goodness.herokuapp.com/recipes/${i}', function (error, response, body) {
    let Rearray =  JSON.parse(body)["results"]
    recipesArr =Rearray.map(p=>
        {
         return {
        title: p.title,
        thumbnail: p.thumbnail,
        href: p.href,
        ingredients: p.ingredients
    }})
    console.log("in server recipeArr is\n",recipesArr);
    res.send(recipesArr)
});     
})
 
app.listen(port, function () {
    console.log("server is listening on port " + port)
})


