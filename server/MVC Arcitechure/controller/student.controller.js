import path from "path";

import { students } from "../module/students.module.js";

export const getStudent = (req, res) => {
  const rootDir = req.app.get("rootDir");
  res.sendFile(path.join(rootDir + "/views/student.html"));
};

export const postStudent = (req, res, next) => {
  const newStudentName = req.body.name;
  const newStudentRoll = Number(req.body.roll);
  const newStudent = {
    name: newStudentName,
    roll: newStudentRoll,
  };
  students.push(newStudent);
  res.send(students);
};
