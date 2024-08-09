import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentForm from '../component/StudentForm';

const AddStudent = () => {
  const navigate = useNavigate();

  const handleSubmit = (student) => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
    navigate('/students');
  };

  return (
    <div>
      <h2>Add Student</h2>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddStudent;
