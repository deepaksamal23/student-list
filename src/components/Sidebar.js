import React from 'react'
// import {motion} from 'framer-motion'
import {AiFillAccountBook,AiFillAlipayCircle,AiFillAlipaySquare,AiFillAliwangwang,AiFillBank,AiFillBook,AiFillCalendar,AiFillCreditCard,AiFillHourglass} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'
const routes =[
   {
      path:'/',
      name:'Dashboard',
      icon:<AiFillAccountBook/>
},
   {
      path:'/cursess',
      name:'Curse',
      icon:<AiFillAlipayCircle/>
},
   {
      path:'/exam',
      name:'Exam',
      icon:<AiFillAlipaySquare/>
},
   {
      path:'/student',
      name:'Student',
      icon:<AiFillAliwangwang/>
},
   {
      path:'/result',
      name:'Result',
      icon:<AiFillBank/>
},
   {
      path:'/live',
      name:'Live',
      icon:<AiFillBook/>
},
   {
      path:'/notice',
      name:'Notice',
      icon:<AiFillCalendar/>
},
   {
      path:'/notification',
      name:'Notification',
      icon:<AiFillCreditCard/>
},
] 
 const  Sidebar = ({children}) => {
  return (
    <div className='container'>
   <div className="sidebar">
      <div className="top_section">
            <div className="bars">
                  <AiFillHourglass/>
            </div>
            <h1 className="logo">School Space</h1>
      </div>
      {
            routes.map((items,index)=>(
                  <NavLink to={items.path} key={index} className='link'>
                        <div className="icon">
                              {items.icon}
                        </div>
                        <div className="linl_text">{items.name}</div>
                  </NavLink>
            ))
      }
   </div>
   <main>{children}</main>
    </div>
  )
}

export default Sidebar