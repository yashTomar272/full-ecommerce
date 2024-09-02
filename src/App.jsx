import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Homepage from "./Homepage";
import Nopage from "./Nopage";
import ProductInfo from "./ProductInfo";
import CartPage from "./CartPage";
import AllProduct from "./AllProduct";
import Loginpage from "./Loginpage";
import Contact from "./Contact";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import AddProductPage from "./AddProductPage";
import UpdateProductPage from "./UpdateProductPage";
import ProtectedRouteUser from "./ProtectedRouteUser";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import CathogaryPage from "./CathogaryPage";
// import BuyNowModels from "./BuyNowModels";
import { useEffect, useState } from "react";

// import Loginpage from "./Loginpage";
import {FirebaseProvider} from "./Firebase";
import WelcomePage from './WelcomePage'
import "./App.css"
const App = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePage(false);
    }, 3000); // 3000 milliseconds = 3 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <FirebaseProvider>
      <Router>
        <Routes>
          <Route path="/full-ecommerce/" element={showWelcomePage ? <WelcomePage />: <Homepage/>} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/full-ecommerce/ProductInfo/:id" element={<ProductInfo />} />
          <Route path="/full-ecommerce/CartPage" element={<CartPage />} />
          <Route path="/full-ecommerce/Contact" element={<Contact />} />
          <Route path="/full-ecommerce/AllProduct" element={<AllProduct />} />
          <Route path="/full-ecommerce/Loginpage" element={<Loginpage />} />
          {/* <Route path="/full-ecommerce/BuyNowModels" element={<BuyNowModels />} /> */}
          <Route path="/full-ecommerce/CathogaryPage/:cathogaryname" element={<CathogaryPage />} />
      <Route path="/full-ecommerce/UserDashboard" element={   
          <ProtectedRouteUser> 
            <UserDashboard />   
          </ProtectedRouteUser>
          } />

          <Route path="/full-ecommerce/AdminDashboard" element={ 
          <ProtectedRouteAdmin>
           <AdminDashboard /> 
          </ProtectedRouteAdmin> 
          } />

           
          <Route path="/full-ecommerce/AddProductPage" element={
          <ProtectedRouteAdmin> 
               <AddProductPage />
             </ProtectedRouteAdmin>  
          } />
            
          <Route path="/full-ecommerce/UpdateProductPage/:id" element={   

     /* <ProtectedRouteAdmin> */
               <UpdateProductPage />
              // </ProtectedRouteAdmin>  
          } />
          
        </Routes>
      </Router>
    </FirebaseProvider>
  );
}

export default App;

// import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import React, { useEffect, useState } from 'react';
// import Header from './Header';
// import WelcomePage from './WelcomePage';
// import Loginpage from './Loginpage';
// import { useFirebase } from "./Firebase";

// export default function App() {
//   const firebase = useFirebase();

//   const [loggedin, setLoggedin] = useState(false);
//   const [showWelcomePage, setShowWelcomePage] = useState(true);

//   useEffect(() => {
//     setLoggedin(firebase.isLoggedIn);

//     const timer = setTimeout(() => {
//       setShowWelcomePage(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [firebase]);

//   return (
//     <div className='d-flex flex-column'>
//       {loggedin ? (
//         showWelcomePage ? <WelcomePage /> : <Header />
//       ) : (
//         showWelcomePage ? <WelcomePage /> : <Loginpage />
//       )}
//     </div>
//   );
// }








