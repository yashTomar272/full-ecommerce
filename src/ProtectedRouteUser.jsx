
import { useFirebase } from "./Firebase";
import { useNavigate,Navigate } from 'react-router-dom';
import { useEffect ,useState} from "react";

const ProtectedRouteUser = ({children}) => 
    {
        const firebase = useFirebase();
        const navigate= useNavigate();
        const [isAdmin, setIsAdmin] = useState(null);

        useEffect(() => {
          const data = firebase.userData;
          if (data && data.role === "user") {
            setIsAdmin(false);
          } else {
            setIsAdmin(true);
            navigate("/LoginPage");
          }
        }, [firebase.userData, navigate]);
        if (isAdmin === null) {
          return <div>Loading...</div>;
        }
        return !isAdmin ? children : null;
      }
       

export default ProtectedRouteUser