import express from "express";
import path from "path";
import { fileURLToPath } from "url";

/*------------------
 Import routes Here
 -------------------*/
import homeRouter from "./routes/index.router.js";
import studentRouter from "./routes/students.router.js";
import deptRouter from "./routes/dept.router.js";

const app = express();

/*-------------------------
 Import env Variables Here
 -------------------------*/
const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

/*--------------------
 Create root dir here
 ---------------------*/
const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

app.set("rootDir", __dirName);

/*--------------------------
 Set static Middleware Here
 ---------------------------*/
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", homeRouter);
app.use("/student", studentRouter);
app.use("/dept", deptRouter);

app.use((req, res) => {
  res.status(404).send("!!! 404 Not Found.");
});

/*------------------------
 Server is listening Here
 ------------------------*/

app.listen(PORT, HOSTNAME, () => {
  console.log(
    `Your Server is Sucessfully Running at http://${HOSTNAME}:${PORT}`,
  );
});
