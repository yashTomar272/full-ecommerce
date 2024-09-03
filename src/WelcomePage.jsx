import gif from './img/gif2.gif'


export default function WelcomePage(){

  return(
    <>
    <div className="Wlcome_main dalju w-100 text-center flex-column position-relative" style={{background:"radial-gradient(#fed9b7,#ffd6d6)",height:"100vh"}}>
   <img src={gif} alt="gif_img" className="img-fluid"/>
      <h2 style={{fontFamily:"n",fontWeight:"500",fontSize:"50px"}}>WELCOME OUR WEBSITE</h2>
      <p className="fst-italic" style={{position:"absolute",bottom:"15px"}}>Created By Yash Tomar</p>
    </div>
    </>
  )
}