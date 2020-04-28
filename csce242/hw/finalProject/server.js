const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/people", {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>console.log("Connected to mongodb"))
    .catch(err => console.error("couldn't connect to mongdb", err));

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    height:Number,
    coffeeOrder:String,
    hobbies:Array,
    description:String
});

const Person = mongoose.model('Person',personSchema);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/people', (req,res)=>{
    getPeople(res);
    //res.send("/people.JSON")
});

async function getPeople(res){
    const people = await Person.find();
    console.log(people);
    res.send(people);
}

app.get('/api/people/:id',(req,res)=>{
    getPerson(req.params.id, res);
});

async function getPerson(id, res){
    const person = await Person.findOne({_id:id});
    console.log(person);
    res.send(person);
}

app.post('/api/people', (req,res)=>{
    const result = validatePerson(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log("this is the problem")
        return;
    }
    
    const person = new Person({
        name:req.body.name,
        age:req.body.age,
        height:req.body.height,
        coffeeOrder:req.body.coffeeOrder,
        hobbies:req.body.hobbies,
        description:req.body.description
    });

    createPerson(person,res);
});

async function createPerson(person, res){
    const result = await person.save();
    console.log("this is the problem 2")
    console.log(result);
    res.send(person);
}

app.put('/api/people/:id',(req,res)=>{
    //const result = validatePerson(req.body);

    //if(result.error){
        //res.status(400).send(result.error.details[0].message);
        //return;
    //}
    console.log("it gets here")
    updatePerson(res, req.params.id, req.body.name, req.body.age, req.body.height, req.body.coffeeOrder, req.body.hobbies, req.body.description);
});

async function updatePerson(res, id, name, age, height, coffeeOrder, hobbies, description){
    const result = await Person.updateOne({_id:id},{
        $set:{
            name:name,
            age:age,
            height:height,
            coffeeOrder:coffeeOrder,
            hobbies:hobbies,
            description:description
        }
    })

    res.send(result);
}

app.delete('/api/people/:id',(req,res)=>{
    removePerson(res,req.params.id);
});

async function removePerson(res,id){
    const person = await Person.findByIdAndRemove(id);
    res.send(person);
}

function validatePerson(person){
    const schema = {
        name:Joi.string().min(3).required(),
        
        coffeeOrder:Joi.string().min(3).required(),
        hobbies:Joi.required(),
        description:Joi.string().min(3).required()
    };

    return Joi.validate(person,schema);
}

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})