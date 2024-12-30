'use client';
import React from "react";
import StudentCard from "../Component/StudentCard";
const students = [
  {
    name: "Rafay",
    rollno: 442540,
    class: "11th Grade",
    gender: "Male",
  },
  {
    name: "Aliza",
    rollno: 446890,
    class: "10th Grade",
    gender: "Female",
  },
  {
    name: "Raza",
    rollno: 416840,
    class: "8th Grade",
    gender: "Male",
  }
];

const StudentsList: React.FC = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h1 className="title text-center text-bold text-5xl uppercase">Student ID Cards</h1>
      <br />
      {students.length > 0 ? (
        <div className="student-cards">
          {students.map((student) => (
            <StudentCard key={student.rollno} student={student} />
          ))}
        </div>
      ) : (
        <p>No students available.</p>
      )}
      <style jsx>{`
        .title {
          margin-bottom: 20px;
        }
        .student-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default StudentsList;
