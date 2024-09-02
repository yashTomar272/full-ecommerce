import { useEffect, useState } from "react";
import { useFirebase } from "./Firebase";
import { useNavigate, Navigate } from "react-router-dom";
import Loader from './Loader'

const ProtectedRouteAdmin = ({ children }) => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const data = firebase.userData;
    console.log("hello ", data);
    if (data?.role === "admin") {
      setIsAdmin(true);
      console.log("it is admin");
    } else {
      setIsAdmin(false);
      console.log("nav logon");
      navigate("/LoginPage");
    }
  }, [firebase.userData, navigate]);
  if (isAdmin === null) {
    return <Loader/>
  }
  return isAdmin ? children : null;
};

export default ProtectedRouteAdmin;
