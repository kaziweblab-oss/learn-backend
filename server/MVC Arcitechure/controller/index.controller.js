import path from "path";

export const getHome = (req, res) => {
  const rootDir = req.app.get("rootDir");
  res.sendFile(path.join(rootDir + "/views/index.html"));
};
