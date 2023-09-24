const express = require("express");
const cors = require("cors");
const userRouter = require("./controllers/userRouter");
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", userRouter);

app.listen(8000, () => {
  console.log("Serevr Okay");
});
