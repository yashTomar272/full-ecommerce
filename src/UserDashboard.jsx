import Layout from './Layout';
import { useFirebase } from "./Firebase";
import React, { useState, useEffect } from "react";

import { MdCurrencyRupee } from "react-icons/md";
import { NavItem } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";

export default function UserDashboard(){
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  const firebase = useFirebase();
  const {getAllOrder}=firebase;
  useEffect(() => {
    const data = firebase.userData;
    console.log("hhhh", data);
    setUser(data);
  }, [firebase.userData]);
  
  const handleLogout= async()=>{
  await firebase.logout();
    // navigate('/Loginpage')
  }
  return(
    <>
    <Layout>
    <div className=" Main_user w-100   h-100 bg-light">
      <div className="container d-flex alig py-5 dalju flex-column gap-4">
    <div className='User_First bg- w-100  d-flex align-items-center justify-content-center p-3 flex-column ' style={{borderRadius:"10px",background:"#ffd6d6"}}>
     <div className='dalju' style={{width:"90px",aspectRatio:"1",borderRadius:"50%",border:"1px solid #737373"}}> <img src="2.jpeg" alt='User_img'  style={{width:"90px",aspectRatio:"1",borderRadius:"50%"}}/></div>
     <div className='d-flex gap-2'> <h6>Name :</h6><span>{user?.username}</span></div>
     <div className='d-flex gap-2'> <h6>Email :</h6>{user?.email}</div>
       <div className='d-flex gap-2'> <h6>Date :</h6>{user?.date}</div>
       <div className='d-flex gap-2'> <h6>Role :</h6>{user?.role}</div>
      <button className='btnn' style={{height:"40px",borderRadius:"8px"}} onClick={handleLogout}> Logout</button>
    </div>
        {
          getAllOrder.filter((obj)=>obj.userid===user?.userId).map((order,ind)=>{
            
           return(
             <div key={ind} >
               {
                 order.cartItems.map((item)=>{
                   const {title,price,productImgUrl,id,date,quantity,category}=item;
                 
                   return(
                     <div className='User_Second  bg- flex-column d-flex mb-2 ' key={item.id}  style={{borderRadius:"9px",border:"2px solid #e6e5e5",maxWidt:"380px"}}>
                        <div className="d-flex flex-md-row  flex-column justify-content-around  bg- gap-2 p-3" style={{background:"#ffd6d6",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}}>
                          <div className='d-flex gap-3 text-center justify-content-between'>
                      <div >
                        <h6 className='mb-0'>Order Id</h6>
                          <span>{id}</span></div>
                          <div><h6 className='mb-0'>Date</h6>
                          <span>{date}</span></div>
                      </div>
                          <div className='d-flex gap-3 text-center justify-content-between'>
                         <div> <h6 className='mb-0'>Total Amount</h6>
                          <span><MdCurrencyRupee/> {price*quantity}</span></div>
                           <div><h6 className='mb-0'>Order Status</h6>
                          <span>{order.status}</span>
                           </div>
                        </div>
                        </div>



                       
                        <div className='p-3 gap-5 d-flex  w-100 justify-content-around'>

                       <div className='d-flex  gap-2 '>
                       <div  className=" p-2 dalju"style={{width:"100px",height:"100px",boxShadow:"0px 2px 4px rgba(0,0,0,0.25)",borderRadius:"7px"}}> <img src={productImgUrl} style={{width:"80px",height:"90px",borderRadius:"7px"}}/>
                       </div>
                         <div className='d-flex flex-column'><h6 className='mb-0'>{title}</h6>
                         <span style={{color:"#c9c5c5"}}> {category} </span>
                         <span style={{color:"#c9c5c5"}}> x{quantity}   </span>
                           </div>

                       </div>
                           <h6><MdCurrencyRupee/> {price}</h6>

                        </div>
                        </div>
                   )
                 })
               }
             
             </div>

           ) 
          })
        }
    
    </div>
    </div>
    </Layout>
    </>
  )
}