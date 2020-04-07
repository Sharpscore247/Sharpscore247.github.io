const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/boxers', (req,res)=>{
    boxers = [];
    boxers[0]={
        img:"images/Ali.jpg",
        name:"Muhammad Ali",
        height:"6 ft 3 in",
        reach:"78 in",
        stance:"Orthodox",
        record:[61,56,37,5,0]
        
    }
    boxers[1]={
        img:"images/Frazier.jpg",
        name:"\"Smokin'\"Joe Frazier",
        height:"5 ft 11.5 in",
        reach:"73 in",
        stance:"Orthodox",
        record:[37,32,27,4,1]
        
    }
    boxers[2]={
        img:"images/Tyson.jpg",
        name:"Mike Tyson",
        height:"5 ft 10 in",
        reach:"71 in",
        stance:"Orthodox",
        record:[58,50,44,6,2]
        
    }
    boxers[3]={
        img:"images/Duran.jpg",
        name:"Roberto Duran",
        height:"5 ft 7 in",
        reach:"66 in",
        stance:"Orthodox",
        record:[119,103,70,16,0]
        
    }
    boxers[4]={
        img:"images/Foreman.jpg",
        name:"George Foreman",
        height:"6 ft 4 in",
        reach:"80 in",
        stance:"Orthodox",
        record:[81,76,68,5,0]
        
    }
    boxers[5]={
        img:"images/ButterBean.png",
        name:"Eric \"Butterbean\" Esch",
        height:"5 ft 11.5 in",
        reach:"78 in",
        stance:"Orthodox",
        record:[91,77,58,10,4]
        
    }
    

    res.json(boxers);
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});