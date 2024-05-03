import React from 'react'

export default function Testimonails(props) {
  return (

    <>

<div style={{height:'150px'}}></div>

<div className='container-fuild' id='d'>

  <div className='bi4 c' style={{color:'white'}}>

      <div className='container'>

          <div className='row'>

              <div className='col-md-2 '></div>

              <div className='col-md-8'>

                  <div style={{height:"50px"}}></div>

                    <center>

                     <p className='display-4'><b>"It Was the Best Experience for Me!"</b></p> 

                      <p style={{fontSize:"20px"}}>{props.exp}</p>

                      <div className='row'>

                          <div className='col-md-5'></div>

                          <div className='col-md-1'>
                              <img src='pict/8.png' style={{height:"60px",width:"60px"}} />
                          </div>

                          <div className='col-md-2'>
                              <p style={{fontSize:"20px",marginTop:"15px"}}>{props.namechange}</p>
                          </div>

                      </div>

                    </center> 

              </div>

          </div> 

      </div>

    </div>

</div>
      
    </>
  )
}
