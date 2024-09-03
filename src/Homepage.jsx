//  import Cathogary from "./Cathogary";
// import Layout from "./Layout";
// import ProductCard from "./ProductCard";
// import Track from "./Track";
// import Testimonial from "./Testimonial";
// import Sliderpage from "./Sliderpage";
// import Loader from "./Loader";
// export default function Homepage(){
//   return(
// <>
// <Layout>

//  <Sliderpage/>
//   <Cathogary/>
//   <ProductCard/>
//   <Track/>
//   <Testimonial/>
//  {/* <Loader/> */}
// </Layout>
  
// </>
//   )
// }
import React, {useEffect } from "react";
import Cathogary from "./Cathogary";
import Layout from "./Layout";
import ProductCard from "./ProductCard";
import Track from "./Track";
import Testimonial from "./Testimonial";
import Sliderpage from "./Sliderpage";
// import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "./Firebase";


export default function Homepage() {
const firebase = useFirebase()
  const navigate= useNavigate()
useEffect(()=>{
   if(firebase.user=== null){ navigate('/full-ecommerce/LoginPage')}

},[firebase])
  return (
    
    <Layout>
      <Sliderpage />
      <Cathogary />
      <ProductCard />
      <Track />
      <Testimonial />
      {/* <Loader /> */}
    </Layout>
    
  );
}


// import React, { useState, useEffect } from "react";
// import Cathogary from "./Cathogary";
// import Layout from "./Layout";
// import ProductCard from "./ProductCard";
// import Track from "./Track";
// import Testimonial from "./Testimonial";
// import Sliderpage from "./Sliderpage";
// import Loader from "./Loader";
// import { useFirebase } from "./Firebase";
// import { useNavigate } from "react-router-dom";
// import Loginpage from "./Loginpage";

// export default function Homepage() {
//   const firebase=useFirebase();
//   const navigate=useNavigate();
//   const [loggedin,setloggedin]=useState(false);
//   useEffect(()=>{
//     if(firebase.isLoggedIn){
//           setloggedin(true);
//     }
//     else{
//       setloggedin(false);
//     }
//   },[firebase])

//   return (
//    <>
//      {loggedin?
//      (
//        <>
//          <Layout>
//            <Sliderpage />
//            <Cathogary />
//            <ProductCard />
//            <Track />
//            <Testimonial />
//            {/* <Loader /> */}
//          </Layout>
//        </>
//      )
//      :(
//        <><Loginpage/>
//          </>)}
//      </>
//     )
// }
