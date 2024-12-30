'use client';
import React from 'react';

type Student = {
  name: string;
  rollno: number;
  class: string;
  gender: string;
};

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="student-card">
      <section className="student-details">
        <h2 className="student-name">{student.name}</h2>
        <p className="student-info">Roll No: {student.rollno}</p>
        <p className="student-info">Class: {student.class}</p>
        <p className="student-info">Gender: {student.gender}</p>
      </section>
      <style jsx>{`
        .student-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          background-color: #f9f9f9;
          width: 250px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .student-card:hover {
          transform: scale(1.05);
        }

        .student-details {
          margin-bottom: 10px;
        }

        .student-name {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .student-info {
          font-size: 1rem;
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default StudentCard;
