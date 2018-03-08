//Twój kod
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('./public/zadanie02'));

app.post('/cookie/set',(req,res)=>{
    const imie = req.body.name;
    res.cookie('imie', imie,{
        maxAge: 44640000
    });
    res.send("Zapisano imię.");
});

app.get('/cookie/show',(req,res)=>{
    const myName = req.cookies.imie;
    res.send("Ciastko ma wartość "+ myName)
});

app.get('/cookie/check',(req,res)=>{
    const myName = req.cookies.imie;
    if(myName===undefined){
        res.send("Nie ma żadnego ciasteczka")
    }

    res.send("Ciastko ma wartość "+ myName);
});


app.listen(3000,()=>{
    console.log("Serwer uruhchomiony")
});