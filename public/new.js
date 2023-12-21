import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import path from "path";
import ejs from "ejs";
const app = express();
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(path.join(path.resolve(), 'public')));
app.set("views",path.join(path.resolve(),"src","views"));
app.get("/",(req,res)=>{
    res.render("layout");
})
app.listen(3000,()=>{
    console.log("server id listening in port 3000");
});

<html>
    <head>
        <table>
            <head>
                <title>
                    
                </title>
            </head>
        </table>
    </head>
</html>