import { FaBasketShopping } from "react-icons/fa6";
import { FaListOl } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetail from "./ProductDetail";
import UserDetail from "./UserDetail";
import OrderDetail from "./OrderDetail";
import AnalyticI from "./AnalyticI";
import AnalyticII from "./AnalyticII";
import AnalyticIII from "./AnalyticIII";

import { useFirebase } from "./Firebase";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);

  const firebase = useFirebase();
  const { getAllProduct } = firebase;
  const { getAllOrder } = firebase;
  const { getAllUser } = firebase;
  useEffect(() => {
    const data = firebase.userData;
    console.log("hhhh", data);
    setUser(data);
  }, [firebase.userData]);
  const handleLogout = async () => {
    await firebase.logout();
    // navigate('/Loginpage')
  };
  return (
    <>
      <div className="w-100  bg-light">
        <div className=" py-5 m-2 d-flex flex-column gap-4">
          <div
            className="w-100 text-center p-3 Admin_hover "
            style={{
              borderRadius: "7px",
              background: "#ffe5ec",
              border: "2px solid #e6e5e5",
            }}
          >
            <h4>Admin Dashboard</h4>
          </div>
          <div
            className="User_First Admin_hover bg- w-100  d-flex align-items-center justify-content-center p-3 flex-column "
            style={{
              borderRadius: "10px",
              background: "#ffe5ec",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="dalju"
              style={{
                width: "90px",
                aspectRatio: "1",
                borderRadius: "50%",
                border: "1px solid #737373",
              }}
            >
              {" "}
              <img
                src="2.jpeg"
                alt="User_img"
                style={{ width: "90px", aspectRatio: "1", borderRadius: "50%" }}
              />
            </div>
            <div className="d-flex gap-2">
              {" "}
              <h6>Name :</h6>
              <span>{user?.username}</span>
            </div>
            <div className="d-flex gap-2">
              {" "}
              <h6>Email :</h6>
              <span>{user?.email}</span>
            </div>
            <div className="d-flex gap-2">
              {" "}
              <h6>Date :</h6>
              <span>{user?.date}</span>
            </div>
            <div className="d-flex gap-2">
              {" "}
              <h6>Role :</h6>
              <span>{user?.role}</span>
            </div>
            <button
              className="btnn"
              style={{ height: "40px", borderRadius: "8px" }}
              onClick={handleLogout}
            >
              {" "}
              Logout
            </button>
          </div>
          <div className=" Track_main d-flex align-items-center justify-content-evenly row  m-3">
            <div  className="dalju p-3 col m-3  flex-column Admin_hover"
              style={{
                border: "1px solid #737373",
                borderRadius: "9px",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                background: "#ffe5ec",
              }}>
            <AnalyticI/>
            </div>
            <div  className="dalju p-3 col m-3  flex-column Admin_hover"
              style={{
                border: "1px solid #737373",
                borderRadius: "9px",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                background: "#ffe5ec",
              }}>
            <AnalyticII/>
            </div>
            <div  className="dalju p-3 col m-3  flex-column Admin_hover"
              style={{
                border: "1px solid #737373",
                borderRadius: "9px",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                background: "#ffe5ec",
              }}>
            <AnalyticIII/>
            </div>
            </div>
          <Tabs>
            <TabList className=" Track_main d-flex align-items-center justify-content-evenly row  m-3">
              <Tab
                className="dalju p-3 col m-3  flex-column Admin_hover"
                style={{
                  border: "1px solid #737373",
                  borderRadius: "9px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                  background: "#ffe5ec",
                }}
              >
                <FaBasketShopping
                  style={{
                    color: "f94144",
                    fontWeight: "500",
                    fontSize: "40px",
                  }}
                />
                <p className="mb-0 text-dark text-center">
                  {getAllProduct.length}
                </p>
                <h6 className="text-center">Total Product</h6>
              </Tab>
              <Tab
                className="dalju p-3 col m-3 flex-column Admin_hover"
                style={{
                  border: "1px solid #737373",
                  borderRadius: "9px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                  background: "#ffe5ec",
                }}
              >
                <FaListOl
                  style={{
                    color: "f94144",
                    fontWeight: "500",
                    fontSize: "40px",
                  }}
                />
                <p className="mb-0 text-dark text-center">
                  {getAllOrder.length}
                </p>
                <h6 className="text-center">Total Order</h6>
              </Tab>
              <Tab
                className="dalju p-3 col m-3 flex-column Admin_hover"
                style={{
                  border: "1px solid #737373",
                  borderRadius: "9px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                  background: "#ffe5ec",
                }}
              >
                <FiUsers
                  style={{
                    color: "f94144",
                    fontWeight: "500",
                    fontSize: "40px",
                  }}
                />
                <p className="mb-0 text-dark text-center">
                  {getAllUser.length}
                </p>
                <h6 className="text-center">Total User</h6>
              </Tab>
            </TabList>
            <TabPanel>
              <ProductDetail />
            </TabPanel>
            <TabPanel>
              <OrderDetail />
            </TabPanel>
            <TabPanel>
              <UserDetail />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}
