var cors = require('cors')
const express = require('express')
var cookieParser = require('cookie-parser');
const sessions = require('express-session');
const mongoose = require('mongoose')
const app = express()
const bodyParser = require("body-parser")
var userModel = require('./userModel.js');
app.set("view engine", "ejs");
app.use(cors());

app.use(cookieParser());
app.use(sessions({secret: "Shh, its a secret!"}));

const schema = {
    email: String,
    password: String
}
const User = mongoose.model("User", schema)
mongoose.connect("mongodb://127.0.0.1:27017/express").then((dbo) => {
    console.log('DB Connected')
}).catch(error => console.log('Failed to connect', error))

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    const session = req.session;
    if(session.email){
        res.redirect('dashboard');
    }
    else{
        userModel.find({}).then(function(FoundItems){
            // res.json({newItem:FoundItems})
            res.render('dynamicForm',{newItem:FoundItems});
          })
           .catch(function(err){
            console.log(err);
          })
    }
    
})
app.post('/', (req, res) => {
    const data = new User({
        email: req.body.email,
        password: req.body.password
    });

    data.save().then(
        () => {
            // res.status(201).json({
            //     message: 'Data Saved Successfully'
            // });
            res.redirect('/');
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )
});



app.post("/login", async function(req, res){ 
	try { 
		// check if the user exists 
		const user = await User.findOne({ email: req.body.email }); 
		if (user) { 
		//check if password matches 
		const result = req.body.password === user.password; 
		if (result) { 
            req.session.email = req.body.email;
			res.redirect("dashboard"); 
		} else { 
			res.status(400).json({ error: "password doesn't match" }); 
		} 
		} else { 
		res.status(400).json({ error: "User doesn't exist" }); 
		} 
	} catch (error) { 
		res.status(400).json({ error }); 
	} 
}); 


app.get('/dashboard', (req, res) => {
    const session = req.session;
    if(session.email){
        res.render('dashboard',{user:session.email});
    }else{
        res.redirect('/');
    }
    
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

app.get('/registration', (req, res) => {
    res.render('registrationForm');
});

app.post("/registration", function(req, res){ 
    res.status(400).json({ error: req.body.username }); 
	 const data = new User({
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
         mobile: req.body.mobile,
      
     });

     data.save().then(
         () => {
             res.status(201).json({
                 message: 'Data Saved Successfully'
             });
         }
     ).catch(
         (error) => {
             res.status(400).json({
                 error: error
             })
         }
     )
});     
app.listen(8000);

















// app.get('/check/:par&:ok',(req,res)=>{
//     res.send('hello '+ req.params.par +' '+ req.params.par);
// })
// app.get('/about',(req,res)=>{
//     res.send('About website');
// })