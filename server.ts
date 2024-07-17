import express from "express";
import cors from "cors";
import routes from "./src/routes/api";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, res.statusCode);
  next();
});
app.use("/api/", routes);

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});
