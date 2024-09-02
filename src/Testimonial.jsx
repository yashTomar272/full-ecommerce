import img1 from "./img/fas1.png";
import img2 from "./img/fas2.png";
import img3 from "./img/fas3.png";

export default function Testimonial (){
  return(
    <>
     <div className="   Testo_main d-flex align-items-center text-center justify-content-center row  m-3">
       <h2 className="fw-bold">Testimonial</h2>
       <h3 style={{color:"#a1a1a1"}}>What our <span style={{color:"#f94144"}}>customers</span> are saying</h3>
     <div className="Testo_content mt-3  col-lg col-9 d-flex align-items-center gap flex-column text-center justify-content-center col" >
     <div style={{width:"78px",borderRadius:"50%",aspectRatio:"1",border:"1px solid #dedede"}}><img src={img1} alt="testo_imgs" style={{width:"78px",borderRadius:"50%",aspectRatio:"1"}}/></div>
       <p style={{color:"#5a5858"}}>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
       <div style={{width:"80px",background:"#f94144",borderRadius:'2px',height:"3px"}}></div>
       <p className="mb-0">KAMAL NAYAN UPADHYAY</p>
       <h6 style={{color:"#838383"}} className="">Senior Product Designer</h6>
     </div>

       <div className="Testo_content mt-3  col-lg col-9 d-flex align-items-center gap flex-column text-center justify-content-center col" >
          <div style={{width:"78px",borderRadius:"50%",aspectRatio:"1",border:"1px solid #dedede"}}><img src={img2} alt="testo_imgs" style={{width:"78px",borderRadius:"50%",aspectRatio:"1"}}/></div>
            <p style={{color:"#5a5858"}}>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
      <div style={{width:"80px",background:"#f94144",borderRadius:'2px',height:"3px"}}></div>
      <p className="mb-0">S MISHRA</p>
            <h6 style={{color:"#838383"}} className="">UI Develeoper</h6>
          </div>

       <div className="Testo_content mt-3  col-lg col-9 d-flex align-items-center gap flex-column text-center justify-content-center col" >
          <div style={{width:"78px",borderRadius:"50%",aspectRatio:"1",border:"1px solid #dedede"}}><img src={img3} alt="testo_imgs" style={{width:"78px",borderRadius:"50%",aspectRatio:"1"}}/></div>
            <p style={{color:"#5a5858"}}>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <div style={{width:"80px",background:"#f94144",borderRadius:'2px',height:"3px"}}></div>
            <p className="mb-0">XYZ</p>
            <h6 style={{color:"#838383"}} className="">C T O</h6>
          </div>
     </div>
    </>
  )
}