import React from 'react'
import { Link } from "react-router-dom";
const StudentApi = ({student}) => {
      
  return (
<>
       <Link className='btn btn-outline-info'  to="#">Add Users</Link>
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
      
      <tr className='table-success '    key={index.toString()}>
            <th scope='col'>{index+1}</th>
            <td>{value.name}</td>
            <td>{value.class}</td>
            <td className='esult'>{value.result}</td>
            <td>{value.score}</td>
            <td>{value.grade}</td>
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

export default StudentApi