
import Carousel from "react-bootstrap/Carousel";
import img1 from "./img/fas1.png";
import img2 from "./img/fas2.png";
import img3 from "./img/fas3.png";
import { Navigate, useNavigate } from "react-router-dom";

export default function Sliderpage() {
  
  return (
    <>
      <UncontrolledExample />
      
    </>
  );
}
function UncontrolledExample() {
  return (
    <Carousel className="homepage">
      <Carousel.Item>
        <SlideMain indx={0} />
      </Carousel.Item>
      <Carousel.Item>
        <SlideMain indx={1} />
      </Carousel.Item>
      <Carousel.Item>
        <SlideMain indx={2} />
      </Carousel.Item>
      <Carousel.Item>
        <SlideMain indx={3} />
      </Carousel.Item>
    </Carousel>
  );
}
function SlideMain({ indx }) {
  const slideData = [
    {
      title: "Sale 20% Off",
      subtitle: "On Everything",
      description:
        "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
      buttonText: "Shop Now",
      image: img1,
    },
    {
      title: "Clearance Sale",
      subtitle: "Up to 50% Off",
      description:
        "Discover incredible deals on a wide range of products. Don't miss out on our limited-time offers.",
      buttonText: "Buy Now",
      image: img2,
    },
    {
      title: "New Arrivals",
      subtitle: "Special Discounts",
      description:
        "Check out the latest additions to our collection with exclusive discounts available now.",
      buttonText: "Explore",
      image: img3,
    },
    {
      title: "Holiday Sale",
      subtitle: "Save Big",
      description:
        "Enjoy massive savings on holiday essentials. Shop now and make the most of our special offers.",
      buttonText: "Start Shopping",
      image: "fas44.png",
    },
  ];
  const navigate=useNavigate();
  return (
    <>
      <div className="Slider_main d-flex justify-content-between  w-100 position-relative d-flex p-3 " style={{ background:"radial-gradient(#fff,#ffd6d6)",height:"100vh"}}>
        <div className="d-flex  page_text flex-column ms-sm-5  justify-content-center">
          <h1
            className="fw-bold Slide_h"
            style={{
              color: "#f94144",
              fontSize: "70px",
              fontFamily: "initial",
            }}
          >
            {slideData[indx].title}
          </h1>
          <h1
            className="fw-bold Slide_hh"
            style={{ fontSize: "60px", fontFamily: "initial" }}
          >
            {slideData[indx].subtitle}
          </h1>
          <span
            className="fst-italic"
            style={{ maxWidth: "550px", color: "#6d6875", fontSize: "20px" }}
          >
            {slideData[indx].description}
          </span>
          <button className=" mt-4 btnn py-2 rounded fs-5  "  style={{height:"47px"}}>
            {slideData[indx].buttonText}
          </button>
        </div>
        <div className="page_img  d-none d-sm-block">
          <img
            src={slideData[indx].image}
            alt="fastion_img "
            className="img-fluid ms-1   h-100 w-100 "
            style={{ filter: "drop-shadow( 1px 5px 9px #f94144)" }}
          />
        </div>
      </div>
    </>
  );
}
