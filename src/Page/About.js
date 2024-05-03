import React from 'react'

export default function About(props) {
  return (
    <>
       <div className='bi2'>
        <div style={{height:"100px"}}></div>

      <center id='b'>

          <h1>I Can Solve <span style={{color:"#37c440"}}>Your Problems!</span></h1><br />

          <h3>Call:{props.nbr}</h3><br />

          <p>{props.pro}</p><br />

          <img src='pict/6.png' /><br /><br /><br />

          <div style={{height:"2px",width:"80%",backgroundColor:"#37c440"}}></div>

      </center>

      <div className='container'><div style={{height:"50px"}}></div>

          <div className='row'>

              <div className='col-md-3'>

                  <center>

                      <div style={{height:"80px"}}><img src='pict/2.png'  className='ab' /></div>
                   
                      <p style={{fontSize:"28px",}}>{props.att}</p>

                      <p>{props.heart}</p>

                  </center>

              </div>

              <div className='col-md-3'>

                  <center>

                      <div style={{height:"80px"}}><img src='pict/3.png' className='ab' /></div>

                      <p style={{fontSize:"28px"}}>{props.mig}</p>

                      <p>{props.raine}</p>

                  </center>

              </div>

              <div className='col-md-3'>

                  <center>

                      <div style={{height:"80px"}}><img src='pict/4.png' className='ab' /></div>

                      <p style={{fontSize:"28px"}}>Family Education</p>

                      <p>Lorem elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                  </center>

              </div>

              <div className='col-md-3'>

                    <center>

                        <div style={{height:"80px"}}><img src='pict/5.png' className='ab' /></div>

                        <p style={{fontSize:"28px"}}>Recreational Therapy</p>

                        <p>{props.rec}</p>

                          <div style={{height:"80px"}}></div>
                    </center>

              </div>

          </div>

      </div>

    </div> 

    <div style={{backgroundColor:"#38d152"}}>

        <div className='container'><div style={{height:"40px"}}></div>

            <div className='row'>

                <div className='col-md-9'>

                    <h2 style={{color:"white"}}>Are You Looking for a Perfect Psychiatrist?</h2>

                 </div>

                 <div className='col-md-3'> 

                      <button className='btn2'><b>CONTACT BROOKS</b></button>

                </div><div style={{height:"40px"}}></div> 

            </div>

        </div>

    </div>

    </>
  )
}
