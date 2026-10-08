/*-----------------
 Import Exprss Here
 ------------------*/
import express from "express";
import path from "path";

/*---------------
 Create app Here
 ---------------*/
const app = express();

/*------------------------
 Import env Variables Here
 -------------------------*/
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";
const PORT = process.env.PORT || 3001;

/*------------------
 Import Routers Here
 ------------------*/
import homeRouter from "./routes/index.js";
import { fileURLToPath } from "url";

/*-------------------
 Create rootDir Here
 -------------------*/
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName)

app.set("rootDir",__dirname)

app.use(express.static('public'))
/*------------------
 Handel Routes Here
 -------------------*/
app.use(homeRouter);

app.get("/about", (req, res) => {
  res.send("I am About Route " + req.currentTime);
});

/*---------------------------
 Handel Wild Error Card Here
 ----------------------------*/
app.use((req, res) => {
  res.status(404).send("!!! 404 Page Not Found.");
});

app.listen(PORT, () => {
  console.log(`Your Server is running at http://${HOSTNAME}:${PORT}`);
});
