import { students } from "../module/students.module.js";

export const getStudent = (req, res) => {
  res.render("student", {});
};

export const postStudent = (req, res, next) => {
  const newStudentName = req.body.name;
  const newStudentRoll = Number(req.body.roll);
  const newStudent = {
    name: newStudentName,
    roll: newStudentRoll,
  };
  students.push(newStudent);
  res.render('list',{students});
};
