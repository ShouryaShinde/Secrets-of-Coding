//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express" ;
import bodyParser from "body-parser" ;
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express() ;
const port = 3000 ;

var isCorrect = false ;

app.use(bodyParser.urlencoded({extended : true})) ;

function PasswordChecker(req , res , next) {
    const password = req.body["password"];
  if (password === "Code4Fun!") {
    isCorrect = true;
  }
  next();
}

app.use(PasswordChecker) ;

app.get( "/" , (req , res) => {
    res.sendFile(__dirname + "/public/index.html") ;
});

app.post("/check" , (req , res) => {
    if (isCorrect) {
      res.sendFile(__dirname + "/public/secret.html") ;
    }
    else {
      res.sendFile(__dirname + "/public/index.html") ;
    }
    isCorrect = false ;
});

app.listen(port , ()=> {
  console.log(`listening on Port ${port}`) ;
});