const express = require("express");
const { logger } = require("./middleware");
const carRoutes = require("./routes/carRoutes");

// kurulum
const app = express();
const port = 3000;

// middleware (arayazılım)
app.use(logger);

// isteklerin body/header/params bölümlerine erişimi sağlayan middleware
app.use(express.json());

// endpoint tanımlama 2. yöntem
app.use(carRoutes);

app.listen(port, () => {
  console.log("3000 portuna gelen istekler dinlemeye alındı");
});
