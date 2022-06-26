let express = require("express");
let app = express();

//This line creates an Express application by calling the top-level express() function.
// Our app variable (express application) has methods for handling requests and configuring 
// how the application behaves. We can create multiple apps this way,
// each with their own requests and responses.

app.use(express.static("cp"));

app.get("/additem",(req,res)=>{

    res.send("Add item logic");

});

app.get("/updateitem",(req,res)=>{

    res.send("Update item logic");

});

app.listen(420,()=>{
    console.log("Express on");
});
