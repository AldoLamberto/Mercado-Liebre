const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const puerto = process.env.Port || 3031;

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.listen(puerto, () => {
  console.log("Aplicación esuchando en puerto 3031");
});

// Formulario Login

app.get("/login", (req,res) => {
 let htmlPath = path.resolve(__dirname, "/views/login.html");
  res.sendFile(htmlPath)
 })

 app.post("/login", (req, res) => {
   res.send("LLEGO EL FORMULARIO DE LOGIN")
 })

// Formulario Register
app.get("/register", (req,res) => {
let htmlPath = path.resolve(__dirname, "/views/register.html");
  res.sendFile(htmlPath)
})

app.post("/register", (req, res) => {
  res.send("REGISTRO COMPLETADO");
   })