import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extented:true}));
app.use(express.static("public"));


const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","March","April","May","June","July","August","Sept","Oct","Nov","Dec"];

const d = new Date();
let day = days[d.getDay()];
let month = months[d.getMonth()];
let date = d.getDate();
var currentDate = `${day},${month},${date}`

app.get("/", (req, res) => {
  res.render("index.ejs",{date:currentDate});
});

app.get("/work", (req, res) => {
  res.render("work.ejs");
});

app.post("/submit",(req,res)=>{
  const taskCreated=req.body["newtask"];
  const divContainer = document.getElementById('container-form');
  const newDiv = document.createElement('div');
  newDiv.textContent = taskCreated;
  divContainer.appendChild(newDiv);

  res.render("index.ejs",{taskList:taskCreated});
  console.log(taskList);
 

})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
