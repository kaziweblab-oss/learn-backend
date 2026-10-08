import express from "express";

/*-----------------------
 Create middlewares Here
 -----------------------*/
// import myMiddleware from "./../middleware/index.middleware.js";

const router = express.Router();

router.get(["/", "/home"], (req, res) => {
  const rootDir = req.app.get("rootDir");
  res.sendFile(rootDir + "/views/index.html");
});

export default router;
