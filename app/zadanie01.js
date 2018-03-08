//Twój kod
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./public/zadanie01'));

app.post('/result',(req,res)=>{
    const {a,b} = req.body;
    if (parseInt(a) % parseInt(b) === 0) {
        res.send("licaba: " + b + " jest dzielnikem liczby "+ a);
    } else
        res.send("Liczba " + b + " nie jest dzielnikiem");
});

app.listen(3000,()=>{
    console.log("Serwer uruchomoiny na porcie 3000");
});