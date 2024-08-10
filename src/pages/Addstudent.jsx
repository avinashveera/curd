import React from 'react';
import StudentForm from '../component/StudentForm';

const AddStudent = () => {

  const handleSubmit = ({ name, roll, clas }) => {
   
     fetch(`http://localhost:4000/create`,{
        method:"POST",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify({
         name,
         clas,
         roll
        })
      })




  };

  return (
    <div>
      <h2>Add Student</h2>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddStudent;
