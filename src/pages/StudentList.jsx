import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetData=async ()=>{

    const getStdata=await fetch("http://localhost:4000/student");

    const data=await getStdata.json();

      setStudents(data.user)
  }

  useEffect( () => {
    
    
     fetData();

    
    
  }, []);


  const handleDelete = async(_id) => {
    
    await fetch(`http://localhost:4000/delete/${_id}`,{
        method:"DELETE",
        headers:{
          "content-Type":"application/json"
        }
      })

    fetData();

  };
  

  const handleEdit =async (_id) => {


    const studentName = prompt("Enter new name:");
    const studentRoll = prompt("Enter new roll number:");
    const studentClass = prompt("Enter new class:");

   
      await fetch(`http://localhost:4000/update/${_id}`,{
        method:"PUT",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify({
          name:studentName,
          roll:studentRoll,
          clas:studentClass
        })
      })

    fetData();


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
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.clas}</td>
              <td>
                <button onClick={() => handleEdit(student._id)}>Edit</button>
                <button  onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
