import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import path from "path";
import ejs from "ejs";
import expressEjsLayouts from "express-ejs-layouts";
import {fetchjobs,loginuser,adduser,getdata} from "./src/controller/usercontroller.js"
// const Jobscontroller =  new Jobscontroller();
// import {auth} from "./middlewares/auth.js"
import bodyParser from "body-parser";


const app = express();

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false},
}))
// app.use(auth);
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.use(express.static(path.join(path.resolve(), 'public')));
app.set("views",path.join(path.resolve(),"src","views"));
app.get("/",(req,res)=>{
    res.render("home");
})
app.listen(3000,()=>{
    console.log("server id listening in port 3000");
});
app.get("/jobs",fetchjobs);
app.get("/portal",(req,res)=>{
    res.render("portal");
});
app.get("/login",(req,res)=>{
    res.render("login");
})
app.post("/login",loginuser);
app.post("/register",adduser);
app.get("/portal/:id",getdata);
