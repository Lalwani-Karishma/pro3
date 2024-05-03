import React from 'react'

export default function Contact(props) {
  return (
    <>
      
      <div className='container' id='g'>

    <div className='row'>

      <div className='col-md-4 p-0'>

          <div className='bi7 d'>

            <center style={{fontSize:'22px'}}>
              <div style={{height:'50px'}}></div>

            <i class="fa fa-envelope-o clwg" aria-hidden="true"  style={{fontSize:'30px'}}></i>
            <p style={{color:'white'}}>psychiatrist@example.com</p>

            </center>
            <div style={{height:'50px'}}></div>

          </div>

      </div>

      <div className='col-md-4 p-0'>

          <div className='bi8 d'>

            <center style={{fontSize:'22px'}}>
              <div style={{height:'50px'}}></div>

              <i class="fa fa-bookmark-o clwg" aria-hidden="true"  style={{fontSize:'30px'}}></i>

            <p style={{color:'white'}}>{props.c}</p>

            </center>
            <div style={{height:'50px'}}></div>

          </div>

      </div>

      <div className='col-md-4 p-0'>

          <div className='bi9 e'>

            <center style={{fontSize:'22px'}}>
              <div style={{height:'50px'}}></div>

              <i class="fa fa-phone clwb" aria-hidden="true" style={{fontSize:'30px'}}></i>

            <p style={{color:'white'}}>Contact us - {props.num}</p>

            </center>
            <div style={{height:'50px'}}></div>

          </div>

      </div>

    </div>  

  </div>

<div className='bi10'>
    <div style={{height:'50px'}}></div>

      <center>

        <button className='btn6'><i class="fa fa-facebook-square" aria-hidden="true"></i></button>

        <button className='btn6 ms-2'><i class="fa fa-twitter" aria-hidden="true"></i></button>

        <button className='btn6 ms-2'><i class="fa fa-instagram" aria-hidden="true"></i></button>

        <button className='btn6 ms-2'><i class="fa fa-linkedin-square" aria-hidden="true"></i></button>

      </center>
        <div style={{height:'50px'}}></div>

</div>     


    </>
  )
}
