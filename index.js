const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const port = 8000;
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connect mongodb success");
});

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(bodyParser.json());

app.use("/author", authorRoute);
app.use("/book", bookRoute);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
app.listen(port, () => console.log(`http://localhost:${port}`));
