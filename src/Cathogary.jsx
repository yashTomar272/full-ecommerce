import { useNavigate } from "react-router-dom"
import { validateLocaleAndSetLanguage } from "typescript"

export default function Cathogary(){
  const navigate=useNavigate();
const cathArr=[
  {img:"cath1.png",name:"Fashion"},
  {img:"cath2.png",name:"Shirt"},
  {img:"cath3.png",name:"Jacket"},
  {img:"cath4.png",name:"Mobile"},
  {img:"cath5.png",name:"Laptop"},
  {img:"cath6.png",name:"Shoes"},
  {img:"cath7.png",name:"Books"},
  {img:"cath8.png",name:"Home"},
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
           <img src={val.img} alt="cath_imgss" style={{height:"130px",aspectRatio:"1",borderRadius:"50%"}} onClick={()=>navigate(`/CathogaryPage/${val.name}`)}/>
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