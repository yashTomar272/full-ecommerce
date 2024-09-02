// import React, { useState } from "react";
// import { useFirebase } from "./Firebase";
// import { PiEyeLight } from "react-icons/pi";
// import { PiEyeSlash } from "react-icons/pi";
// import { Timestamp } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// // import { Navigate } from "react-router-dom";
// export default function Loginpage() {
//   const firebase = useFirebase();

//   const [newUser, setNewUser] = useState(true);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [Show, setShow] = useState(true);
//   const navigate=useNavigate();full-ecommerce/
//   const handleShow = () => {
//     setShow(!Show);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(false);

// //     if (newUser) {
// //       try {
// //         const users = await firebase.signupUserWithPassEmail(email, password);
// // const userId=users.user.uid;
// //         const data=await firebase.writeUserData(username,userId,email,password);
// //         console.log("data", users);
// //         console.log("data", data);

// //        localStorage.setItem("username", username);

// //       } catch (error) {
// //         setError(true);
// //         setErrorMsg(error.message);
// //       }
//     if (newUser) {
//       try {
//         const users = await firebase.signupUserWithPassEmail(email, password);
//         const userId = users.user.uid;
//        const data= await firebase.writeUserData(username, userId, email, password);
//          console.log("data",data)
//         console.log("dtaRoe",data.role)
//         // Since writeUserData does not return a value, you don't need to log data
//         console.log("User signed up and data written successfully.");

//         localStorage.setItem("username", username);

//       } catch (error) {
//         setError(true);
//         setErrorMsg(error.message);
//       }
//     } else {
//       try {
//         const login = await firebase.loginWithEmailAndPass(email, password);
//         console.log("login=>", login);

//       } catch (error) {
//         setError(true);
//         setErrorMsg(error.message);
//       }
//     }
//   };

import React, { useState, useEffect } from "react";
import { useFirebase } from "./Firebase";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import logo from './img/logooo.png';
// import {toast} from 'react-hot-toast'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Loginpage() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [Show, setShow] = useState(true);
  const [data,setData]= useState(null)


    useEffect(() => {
      const fetchData = async () => {
        const userData = await firebase.userData
        setData(userData);
      };
      fetchData();
    }, [firebase,firebase.user]);
  useEffect(() => {
    if (data) {
      const NextPage = () => {
        console.log("hello", data?.role);
        if (data?.role === "user") {
          navigate("/full-ecommerce/UserDashboard");
        } else {
          navigate("/full-ecommerce/AdminDashboard");
        }
      };
      NextPage();
    }
    }, [data, navigate]);
    
  const handleShow = () => {
    setShow(!Show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (newUser) {
        try {
          const user = await firebase.signupUserWithPassEmail(email, password);
          // firebase.setUser(user)
          console.log(user)
          const userId= user.uid
          const data = await firebase.writeUserData(username,userId,email,password)
          console.log("User signed up:", data);
          // localStorage.setItem("username", username);
        } catch (error) {
          setError(true);
          setErrorMsg(error.message);
        }
      } else {
        try {

         const user= await firebase.loginWithEmailAndPass(email, password);

          toast("login successfull");
        } catch (error) {
          setError(true);
          setErrorMsg(error.message);
        }
      }
    };

  return (
    <>
      <div
        className="login_main position-relative d-flex  justify-content-center flex-row p-4 w-100"
        style={{ background: "#f1faee", height: "100vh" }}
      >
        <div
          className="Login_img w-50  position-relative"
          style={{
            background: "radial-gradient(#fff,#f48c06)",
            borderRadius: "40px",
          }}
        >
          <div className="  d-flex flex-column text-center align-items-center ">
            <h1
              style={{
                fontFamily: "n",
                fontWeight: "700",
                color: "black",
                fontSize: "45px",
                marginTop: "50px",
              }}
            >
              Your gateway to But Smart
            </h1>
            <p className=" -italic">
              Secure and seamless ligin experience for Buy Smart users...
            </p>
            <img
              src="login1.png"
              className="img-fluid position-absolute"
              style={{ bottom: "0px" }}
            />
          </div>
        </div>
        <div className="Login_concept  dalju p-3    flex-column position-relative">
          <img
            src={logo}
            alt="logo_img"
            className="img-fluid m-0 p-0"
            style={{ maxWidth: "180px" }}
          />
          <h1 style={{ fontFamily: "n", fontWeight: "700" }}>Welcome Back</h1>
          <p style={{ color: "#cad2c5" }}>
            Plese <span>login</span> to your account
          </p>

          {/* form form form */}
          <form
            className="position-relative d-flex  align-items-center flex-column w-100"
            style={{ gap: "9px", marginTop: "30px" }}
            onSubmit={handleSubmit}
          >
            {newUser && (
              <div className="username position-relative  mt-2">
                <input
                  className="inputt"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label className="Lable" htmlFor="username">
                  Full name
                </label>
              </div>
            )}

            <div className="email position-relative  mt-2">
              <input
                className="inputt"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="Lable" htmlFor="email">
                Email
              </label>
            </div>

            <div className="password position-relative  mt-2">
              <input
                className="inputt"
                type={Show ? "password" : "text"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                /* minLength={6} */
              />

              <label className="Lable" htmlFor="password">
                Password
              </label>
              {Show ? (
                <PiEyeSlash
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "17px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={handleShow}
                />
              ) : (
                <PiEyeLight
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "17px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={handleShow}
                />
              )}
            </div>

            {error && (
              <img
                src="warning.png"
                alt="Warning"
                style={{
                  width: "50px",
                  aspectRatio: "1",
                  margin: "1px auto",
                  scale: "0",
                  animation: " show 0.5s ease forwards",
                }}
              />
            )}
            {error && (
              <span
                style={{
                  fontSize: "12px",
                  margin: "0 auto",
                  color: "red",
                  textAlign: "center",
                }}
              >
                Process Failed
              </span>
            )}
            {error && (
              <span
                style={{
                  fontSize: "12px",
                  margin: "0 auto",
                  color: "red",
                  textAlign: "center",
                }}
              >
                {errorMsg}
              </span>
            )}
            <button type="submit" className="btnnn">
              {newUser ? "Sign Up" : "Log In"}
            </button>
          </form>
          <div className="dalju mt-3 w-100">
            <div
              style={{
                height: "2px",
                backgroundColor: "#e8e3e3",
                width: "90px",
              }}
            ></div>
            <div style={{ color: "#c2c1c1", padding: "10px" }}>
              or Login with
            </div>
            <div
              style={{
                height: "2px",
                backgroundColor: "#e8e3e3",
                width: "90px",
              }}
            ></div>
          </div>

          <button
            onClick={firebase.SignInWithGoogle}
            style={{
              border: "2px solid #c2c1c1",
              borderRadius: "10px",
              padding: "10px 30px",
              gap: "10px",
              cursor: "pointer",
            }}
            className="dalju  "
          >
            <img src="google.png" alt="google_img" style={{ width: "19px" }} />
            <h6 className="p-0 m-0">Google</h6>
          </button>
          {newUser ? (
            <p className="mt-4">
              Already have an account?{" "}
              <span
                style={{
                  cursor: "pointer",
                  color: "#f48c06",
                  borderBottom: "1px solid #f48c06",
                }}
                onClick={() => {
                  setNewUser(false);
                  setError(false);
                }}
              >
                Log in
              </span>
            </p>
          ) : (
            <p className="mt-4">
              Don't have a account?{" "}
              <span
                style={{
                  cursor: "pointer",
                  color: "#f48c06",
                  borderBottom: "1px solid #f48c06",
                }}
                onClick={() => {
                  setNewUser(true);
                  setError(false);
                }}
              >
                Sing up
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
