import React, { useState } from 'react'
import studentData from '../../StudentData'
import { Link } from "react-router-dom";
const Student = () => {
  const [student,setStudent]=useState(studentData)
  
  return (
  <>
        <Link className='btn btn-outline-info'  to="/user/add">Add Users</Link>
  <div className='container my-3 '>
   <table className="table shadow">
  <thead >
    <tr className='bg-dark text-light  '>
      <th scope="col">No.</th>
      <th scope="col"> Student Name</th>
      <th scope="col">Class</th>
      <th scope="col">Result</th>
      <th scope="col">Score</th>
      <th scope="col">Grade</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   
   {
student.map((value,index)=>(
      <tr className='table-success ' >
            <th scope='col'>{index+1}</th>
            <td>{value.name}</td>
            <td>{value.Class}</td>
            <td className='result'>{value.Result}</td>
            <td>{value.Score}</td>
            <td>{value.Grade}</td>
          <td>
            
                <Link className='btn btn-outline-danger mx-1 ' to={'#'}>Edit</Link>
                <Link className='btn btn-info' to=''>Delete</Link>
          </td>
      </tr>
))
   }
    
  </tbody>
</table>
     
    </div>
  </>
  )
}

export default Student