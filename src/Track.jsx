import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Track(){
  return(
    <>
    <div className=" Track_main d-flex align-items-center justify-content-evenly row  m-3">
    <div className="dalju p-3 col m-3  flex-column" style={{border:"1px solid #737373",borderRadius:"9px",boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>
    <HiOutlineShoppingBag style={{color:"f94144",fontWeight:"500",fontSize:"40px"}}/>
      <p className="mb-0 text-dark text-center">Premium Tshirts</p>
      <h6 className="text-center">Our Tshirts are 100% made of Cotton</h6>
    </div>
      <div className="dalju p-3 col m-3 flex-column" style={{border:"1px solid #737373",borderRadius:"9px",boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>
        <HiOutlineShoppingBag style={{color:"f94144",fontWeight:"500",fontSize:"40px"}}/>
          <p className="mb-0 text-dark text-center">Premium Tshirts</p>
          <h6 className="text-center">Our Tshirts are 100% made of Cotton</h6>
        </div>
      <div className="dalju p-3 col m-3 flex-column" style={{border:"1px solid #737373",borderRadius:"9px",boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>
        <HiOutlineShoppingBag style={{color:"f94144",fontWeight:"500",fontSize:"40px"}}/>
          <p className="mb-0 text-dark text-center">Premium Tshirts</p>
          <h6 className="text-center">Our Tshirts are 100% made of Cotton</h6>
        </div>
    </div>
    </>
  )
}