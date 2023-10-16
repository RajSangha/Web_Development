import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const selectedSize = req.body["sizeType"];
  const selectedPizza =  req.body["pizzaType"];
  const selectedTopping = req.body["topping"];
  console.log("pizzatype",selectedSize);
  console.log(selectedPizza);
  console.log(selectedTopping);
  res.render("index.ejs",{size:selectedSize,Pizztype:selectedPizza,top:selectedTopping})

});
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  