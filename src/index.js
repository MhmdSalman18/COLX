const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection=require("./mongodb")

const templatepath = path.join(__dirname, "views", "../templates");

app.use(express.json()); // to parse the incoming requests with JSON pay
app.set("view engine", "hbs"); // set up handlebars as our template engine
app.set("view", templatepath); //by default the name the folder will be views so we need toi make it templates

app.get("/", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/login", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
    
  };
  await collection.insertMany([data]);

response.render("home")

});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
