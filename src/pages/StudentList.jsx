import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const handleEdit = (index) => {
    const studentName = prompt("Enter new name:");
    const studentRoll = prompt("Enter new roll number:");
    const studentClass = prompt("Enter new class:");

    if (studentName && studentRoll && studentClass) {
      const updatedStudents = students.map((student, i) => (
        i === index ? { name: studentName, roll: studentRoll, class: studentClass } : student
      ));
      setStudents(updatedStudents);
      localStorage.setItem('students', JSON.stringify(updatedStudents));
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.class}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
