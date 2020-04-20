const express = require("express");
const app = express();
const Joi = require("joi"); 
app.use(express.static("public"));
app.use(express.json());

let cats = [
    {id:1, name:"Pebbles", color:"Grey", age:1},
    {id:2, name:"Brad", color:"Orange", age:4},
    {id:3, name:"Mrs. Chonk", color:"Black", age:8},
    {id:4, name:"Punchie", color:"Black and White", age:2},
    {id:5, name:"Spook", color:"White", age:5},
    {id:6, name:"WWE Champion of 2017", color:"Grey and Black", age:7},
];

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/cats', (req,res)=>{
    res.send(cats);
});

app.get('/api/cats/:id',(req,res)=>{
    const cat = cats.find(r => r.id === parseInt(req.params.id));

    if(!cat) res.status(404).send("The cat you requested wasn't found");

    res.send(cat);
});

app.post('/api/cats', (req,res)=>{
    const result = catValidation(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const cat = {
        id:cats.length+1,
        name:req.body.name,
        color:req.body.color,
        age:req.body.age
    };
    cats.push(cat);
    res.send(cat);
});

app.put('/api/cats/:id',(req,res)=>{
    const cat =cats.find(r=>r.id === parseInt(req.params.id));

    if(!cat) {
        res.status(404).send("Cat of that id doesn't exist");
    }
    const result = catValidation(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    cat.name = req.body.name;
    cat.color = req.body.color;
    cat.age = req.body.age;
    res.send(cat);
});

app.delete('/api/cats/:id',(req,res)=>{
    const cat = cats.find(r=>r.id===parseInt(req.params.id));

    if(!cat){
        req.status(404).send("Cat not found");
    }

    const index = cats.indexOf(cat);
    cats.splice(index,1);

    res.send(cat);
});

function catValidation(cat){
    const schema = {
        name:Joi.string().min(2).required(),
        color:Joi.string().min(2).required(),
        age:Joi.string().max(2).required()
    };
    return Joi.validate(cat,schema);
}

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})