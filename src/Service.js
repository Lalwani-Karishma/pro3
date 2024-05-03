import React from 'react'

export default function Service(props) {
  return (
    <>

<div style={{height:"100px"}}></div>    

<center id='c'>

    <h1>My Services</h1><br />

    <div style={{height:"2px",width:"5%",backgroundColor:"black"}}></div><br />

    <p>{props.lorem}</p>
    

</center>

<div style={{height:"50px"}}></div>

  <div className='container'>

      <div className='row'>

          <div className='col-md-3 p-0'>

             <img src='pict/2.jpg' className='col-md-12 col-12' />

          </div>

          <div className='col-md-3 p-3' ><br />

              <i class="fa fa-lightbulb-o" aria-hidden="true" style={{fontSize:"50px"}}></i>

              <p style={{fontSize:"27px"}}>{props.abc} </p>

          </div>

          <div className='col-md-3 p-0'>

                <img src='pict/3.jpg' className='col-md-12 col-12' />

          </div>

          <div className='col-md-3 p-3'><br />

            <i class="fa fa-clock-o" aria-hidden="true" style={{fontSize:"50px"}}></i>

            <p style={{fontSize:"25px"}}>Timely personal training sessions for a couple week</p>

          </div>

      </div>

      <div className='row'>

          <div className='col-md-3 p-0'>

              <div className='bi3 col-md-12 col-12 p-0'>

                <div className='b'>

                      <div className='p-5' style={{color:"white"}}>

                    <i class="fa fa-handshake-o" aria-hidden="true" style={{fontSize:"30px"}}></i>

                    <p style={{fontSize:"25px"}}>{props.bet}</p>

                      </div>

                </div>

              </div>

          </div>

          <div className='col-md-6 p-0'>

              <img src='pict/5.jpg' className='col-md-12 col-12' />

          </div>

          <div className='col-md-3 p-0'>
              
              <img src='pict/7.jpg' className='col-md-12 col-12' />
              
          </div>              

      </div>

      <div className='row'> 

          <div className='col-md-3'></div>

              <div className='col-md-3 p-0'>

                  <img src='pict/8.jpg' className='col-md-12 col-12' />

              </div>

              <div className='col-md-3 p-5'>

                  <i class="fa fa-heart-o" aria-hidden="true" style={{fontSize:'30px'}}></i>

                  <p style={{fontSize:'28px'}}>Learn to spend time & money in a convenient manner.</p>

              </div>

      </div>        

  </div>
      
    </>
  )
}
