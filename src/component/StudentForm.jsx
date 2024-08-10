import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault();
    onSubmit({ name, roll, clas: className });
    setName('');
    setRoll('');
    setClassName('');
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Roll</label>
        <input type="text" value={roll} onChange={(e) => setRoll(e.target.value)} required />
      </div>
      <div>
        <label>Class</label>
        <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} required />
      </div>
      <button type="submit">Add Student</button>
    </form>
    <a style={{textDecoration:"none",margin:"200px",padding:"10px",border:"1px solid green"}} href="http://localhost:3000/students">All students</a>
</>

  );
};

export default StudentForm;
