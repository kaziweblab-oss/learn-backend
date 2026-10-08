import path from "path";

import { depts } from "../module/dept.module.js";

export const getDept = (req, res) => {
  const rootDir = req.app.get("rootDir");
  res.sendFile(path.join(rootDir + "/views/dept.html"));
};

export const postDept = (req, res, next) => {
  const newDeptName = req.body.name;
  const newDeptCode = Number(req.body.deptCode);
  const newDept = {
    name: newDeptName,
    deptCode: newDeptCode,
  };
  depts.push(newDept)
  res.send(depts);
};
