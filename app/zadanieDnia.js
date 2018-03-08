//Twój kod

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('./public/zadanieDnia'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());


function readComments(commentsCookieValue) {
    return commentsCookieValue ? JSON.parse(commentsCookieValue) : [];
}

function addComment(commentsCookieValue, newComment) {
    const comments = readComments(commentsCookieValue);
    comments.push(newComment);
    return JSON.stringify(comments);
}

app.get('/', (req, res) => {
        const comments = readComments(req.cookies.comments);
        res.send(`${comments}</br><a href="/add.html">Dodaj nowy komentarz</a>`);
    });

app.post('/save',(req,res)=>{
    const allComments=addComment(req.cookies.comments,req.body.comment);
    res.cookie('comments',allComments,{
        maxAge: 44640000
    });

    res.send(`${allComments}</br><a href="/">Wróć</a>`);
});


app.listen(3000,()=>{
    console.log("Serwer uruchomiony!");
});


