const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//GET
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
})

//POST
app.post("/", function(req, res){
    var result = Number(req.body.num1) + Number(req.body.num2);
    res.send("The sum is" + result)
})

app.post("/bmicalculator", function(req, res){
    var weight  = parseFloat(req.body.weight);
    var height =  parseFloat(req.body.height);
    var bmi = weight*height;
    res.send("Su BMI is: " + bmi );
})

//LISTEN
app.listen(3000, function(){
    console.log("Server running at port 3000");
});


