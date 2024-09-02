
import React, { useEffect, useState } from "react";
import { useFirebase } from "./Firebase";
import { GrCart } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import logo from "./img/logooo.png";

export default function Navbar() {
  const firebase = useFirebase();
  const { getAllProduct, getCartItemCount } = firebase; // Destructure getCartItemCount
  const [cartCount, setCartCount] = useState(0); // State to hold cart item count
  const [activeSection, setActiveSection] = useState(""); // Managing active sections
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // Fetch cart item count on component mount
  useEffect(() => {
    const unsubscribe = getCartItemCount(setCartCount);

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, [getCartItemCount]);

  const handleToggleSection = (section) => {
    if (section === "cart") {
      navigate("/CartPage"); // Navigate to CartPage on cart icon click
    }
    setActiveSection((prevSection) => (prevSection === section ? "" : section));
  };

  const handleNavigation = (path) => {
    setActiveSection(""); // Close all sections when navigating
    navigate(path);
  };

  const filterData = (getAllProduct || [])
    .filter((obj) =>
      obj?.category?.toLowerCase().includes(search?.toLowerCase())
    )
    .slice(0, 8);

  return (
    <>
      <div
        className="Header_main position-relative d-flex justify-content-around bg align-items-center"
        style={{
          boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
          background: "radial-gradient(#fff,#ffd6d6)",
        }}
      >
        <img
          src={logo}
          alt="logo_img"
          className="img-fluid m-0 p-0 nav_logo"
          style={{ maxWidth: "250px" }}
        />

        <div
          className={` ${activeSection === "menu" ? "show" : "d-none d-lg-block "} `}
        >
          <ul
            className={` ${activeSection === "menu" ? "Column " : "Header_ul"} dalju mt-3 gap-5 p-3 `}
            style={{ listStyleType: "none", cursor: "pointer" }}
          >
            <li>
              <Link to={"/full-ecommerce"} onClick={() => handleNavigation("/full-ecommerce")}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/full-ecommerce/AllProduct"}
                onClick={() => handleNavigation("/full-ecommerce/AllProduct")}
              >
                {" "}
                All Product
              </Link>
            </li>
            <li>
              <Link
                to={"/full-ecommerce/AllProduct"}
                onClick={() => handleNavigation("/full-ecommerce/AllProduct")}
              >
                {" "}
                Shop
              </Link>
            </li>
            <li onClick={() => handleNavigation("/full-ecommerce/Contact")}>
              <Link>Contact</Link>
            </li>
            <li>
              <Link
                to={"/full-ecommerce/UserDashboard"}
                onClick={() => handleNavigation("/full-ecommerce/UserDashboard")}
              >
                Account
              </Link>
            </li>
          </ul>
        </div>

        <ul
          className="Header_ull d-flex align-items-center gap-4 mt-2 p-0 position-relative "
          style={{ listStyleType: "none", cursor: "pointer" }}
        >
          <li
            className="fs-4 position-relative"
            onClick={() => handleToggleSection("cart")}
          >
            <GrCart />
            <p
              className="text-primary"
              style={{
                position: "absolute",
                bottom: "3px",
                left: "8px",
                fontSize: "17px",
              }}
            >
              {cartCount} {/* Display cart item count here */}
            </p>
          </li>
          <li className="fs-4 position-relative">
            <RiSearchLine onClick={() => handleToggleSection("search")} />
            {activeSection === "search" && (
              <div
                style={{
                  boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
                  position: "absolute",
                  top: "190%",
                  right: "-80px",
                  zIndex: "1000",
                  borderRadius: "10px",
                }}
              >
                <input
                  value={search}
                  type="search"
                  placeholder="Search......"
                  className="d-flex justify-content-center search"
                  onChange={(e) => setSearch(e.target.value)}
                />

                {search && (
                  <div
                    className="d-flex flex-column mt-1 p-3 gap-2"
                    style={{
                      width: "370px",
                      background: "#e3e3e3",
                      borderRadius: "10px",
                    }}
                  >
                    {filterData.length > 0 ? (
                      <>
                        {filterData.map((val, id) => {
                          return (
                            <span
                              className="d-flex gap-3 align-items-center "
                              key={id}
                              onClick={() => navigate(`/full-ecommerce/ProductInfo/${val.id}`)}
                            >
                              <img
                                src={val.productImgUrl}
                                style={{ width: "43px", aspectRatio: "1" }}
                              />
                              <h6>{val.category}</h6>
                            </span>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <span className="d-flex justify-content-center">
                          <img
                            src="https://www.kpriet.ac.in/asset/frontend/images/nodata.png"
                            style={{ width: "170px", height: "80px" }}
                          />
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </li>
          <li onClick={() => handleToggleSection("menu")}>
            {activeSection === "menu" ? (
              <RxCross2 size={30} className="text-dark d-block d-lg-none" />
            ) : (
              <FaBars size={30} className="text-dark d-block d-lg-none" />
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
