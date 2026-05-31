import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useNavigate } from 'react-router-dom'

import logo from './assets/pic1.png'


function App() {

  const nav=useNavigate();
  

  const [message,setMessage]=useState("");
  
 const registrationform= async()=>{
  try{
  const res=await fetch("https://backend-2-71sm.onrender.com/check-registration");

  const data= await res.json();

  if(data.success){
    nav("/registration-Form",{
      state:{allowed:true}
    })
  }else{
    setMessage(data.message);
  }
  }catch(err){
   console.log(err);
  }
 }


  return (
    <>

    

      <h1>GANDHI COMMUNITY COLLEGE </h1>
      <h2><b>ENNORE BRANCH </b></h2>

       <h4>🌟ADMISSION OPEN 2026🌟</h4> 
      <h3><b>REGISTRATION FORM</b></h3>
      
      <div id="div1">

      <img src={logo} ></img>

      

      <button onClick={registrationform}>Registration Form</button>
</div>


     
    
    </>
  )
}

export default App
