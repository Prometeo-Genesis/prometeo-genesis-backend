
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Prometeo Genesis API está activa.");
});

app.get("/predicciones", (req, res) => {
  fs.readFile("predicciones.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send({ error: "No se pudo leer el archivo de predicciones." });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
