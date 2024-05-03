import React from 'react'

export default function Home(props) {
  return (
    <>

<nav className="navbar navbar-expand-sm navbar-dark" style={{background:"#12174a"}}>
  <div className="container">
    <a className="navbar-brand" href="#a"><img src='pict/1.png' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link clwg" href="#b">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link clwg" href="#c">My Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link clwg" href="#d">Testimonials</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link clwg' href="#e">Charges</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link clwg' href="#f">Appointment</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link clwg' href="#g">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div className='bi1' id='a'>

      <div className='a'>

          <div className='container'><div style={{height:"150px"}}></div>

              <h1 className='display-2' style={{color:"white",fontFamily:"monospace"}}><b>{props.name}<br />Dr. Brooks</b></h1>

              <h4 style={{color:"white"}}>MD(Psychology)</h4><br />

              <div style={{height:"3px",width:"10%",backgroundColor:"white"}} ></div><br />

              <h6 style={{color:"white"}}>{props.para}</h6>

               <br />     

              <button className='btn1'><b>KNOW MORE</b></button>

          </div>
        
      </div>

    </div>


      
    </>
  )
}
