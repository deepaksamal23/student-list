import React, { useState,useEffect } from 'react'
import studentData from '../../StudentData'

import StudentApi from './StudentApi';
const Student = () => {
  let info =studentData

const [student,setStudent]=useState(info)

useEffect(()=>{
setStudent(info)
},[info])

  return (
  <>
       <StudentApi student={student}/>
  </>
  )
}

export default Student