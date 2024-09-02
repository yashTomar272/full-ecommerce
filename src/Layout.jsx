import Footer from './Footer'
import Navbar from './Navbar'

import { useFirebase } from "./Firebase";
import {useEffect,useState} from 'react'
export default function Layout({children}){
 
  return(
<>
  

        <Navbar/>
        { <div className="main-container">
          {children}
        </div> }
        <Footer/> 
    

</>
  )
}