const express=require("express");
const app=express();
const body_parser=require("body-parser");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const path=require("path");
app.use(body_parser.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"uploads/images")));
app.use(express.static(path.join(__dirname,"uploads/imagesPosts")));

dotenv.config();
const port=process.env.PORT || 5001;
const mogoose_url=process.env.MONGO_URL;
mongoose.connect(mogoose_url).then(()=>{
    console.log(`was connected DB successfully ${mogoose_url}`);
     
    app.listen(port,()=>{
        console.log(`Listening for server port http://localhost:${port}`);
        });




        
}).catch((e)=>{

    console.log(`Error: ${e}`);


});








module.exports=app;