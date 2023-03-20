const connectToMongo = require("./db");
const express = require("express");
const cloudinary = require("cloudinary").v2;
var cors = require("cors");
connectToMongo();

cloudinary.config({
  cloud_name: "drxdqo1xr",
  api_key: "264938527261548",
  api_secret: "_p_Ry226TikW-TTJHuX9wSU_zEQ",
});

var app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Musicify backend listening on port ${port}`);
  //   console.log(process.env.MONGO_URI);
});
