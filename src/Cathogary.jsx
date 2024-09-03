import { useNavigate } from "react-router-dom"

import cath1 from './img/cath1.png'
import cath2 from './img/cath2.png'
import cath3 from './img/cath3.png'
import cath4 from './img/cath4.png'
import cath5 from './img/cath5.png'
import cath6 from './img/cath6.png'
import cath7 from './img/cath7.png'
import cath8 from './img/cath8.png'
export default function Cathogary(){
  const navigate=useNavigate();
const cathArr=[
  {img:cath1,name:"Fashion"},
  {img:cath2,name:"Shirt"},
  {img:cath3,name:"Jacket"},
  {img:cath4,name:"Mobile"},
  {img:cath5,name:"Laptop"},
  {img:cath6,name:"Shoes"},
  {img:cath7,name:"Books"},
  {img:cath8,name:"Home"},
]
  
  return(
    <>
    <div className=" Cath_main w-100 p-3 d-flex gap-3 justify-content-between" style={{overflowX:"scroll",scrollbarWidth:'none'}}>
    {
    cathArr.map((val,id)=>{
      return(
        <div key={id} className="d-flex flex-column gap-2 align-items-center" style={{cursor:"pointer"}}>
           <div className="Cath_circ
             le bg- dalju" style={{height:"130px",aspectRatio:"1",borderRadius:"50%",  background:"#e9edc9"
}}>
           <img src={val.img} alt="cath_imgss" style={{height:"130px",aspectRatio:"1",borderRadius:"50%"}} onClick={()=>navigate(`/full-ecommerce/CathogaryPage/${val.name}`)}/>
           </div>
              <h5>{val.name}</h5>
            </div>
      )
    })
    }
    </div>
      
    </>
  )
}