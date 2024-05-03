import React from 'react'

export default function Charges(props) {
  return (
    
    <>

<div style={{height:"50px"}}></div>

<center id='e'>

    <h1>Course Packages!</h1><br />

    <div style={{height:"2px",width:"100px",backgroundColor:"black"}}></div><br />

    <p>{props.pak}</p><br />

</center>

<div className='container'>

    <div className='row'>

       <div className='col-md-4'> 

          <div className='col-md-12' style={{boxShadow:"0px 0px 3px 3px #e0dcce" }}>

            <center><br />

                <h2>Personal Session</h2><div style={{height:"10px"}}></div>

                <div style={{height:"2px",width:"100px",backgroundColor:"black"}}></div>
                    <div style={{height:"10px"}}></div>

            </center>        

                <i class="fa fa-circle" aria-hidden="true" style={{fontSize:"8px",marginLeft:"80px"}}></i>
                <span className='ms-2'>{props.per}</span><br />

                <i class="fa fa-circle" aria-hidden="true" style={{fontSize:"8px",marginLeft:"80px"}}></i>
                <span className='ms-2'>{props.onl}</span><br />

                <i class="fa fa-circle" aria-hidden="true" style={{fontSize:"8px",marginLeft:"80px"}}></i>
                <span className='ms-2'>Pure aut eleifend delectus.</span><br /><br />

                <center><h2>$99</h2>
                <p>Per Hour</p><br /></center>


          </div>

        </div> 

        <div className='col-md-4'> 

          <div className='col-md-12' style={{boxShadow:"0px 0px 3px 3px #e0dcce" }}>

            <center><br />

                <h2>Copule Session</h2><div style={{height:"10px"}}></div>

                <div style={{height:"2px",width:"100px",backgroundColor:"black"}}></div>
                    <div style={{height:"10px"}}></div> 

            </center>       

                <i class="fa fa-circle" aria-hidden="true" style={{fontSize:"8px",marginLeft:"80px"}}></i>
                <span className='ms-2'>{props.com}</span><br />

                <i class="fa fa-circle" aria-hidden="true" style={{fontSize:"8px",marginLeft:"80px"}}></i>
                <span className='ms-2'>{props.non}</span><br />

                <i class="fa fa-circle " aria-hidden="true" style={{fontSize:"8px",marginLeft:"80px"}}></i>
                <span className='ms-1'>{props.con}</span><br /><br />

                <center><h2>$179</h2>
                <p>Per Hour</p><br /></center>
           
          </div>

        </div> 

        <div className='col-md-4'> 

          <div className='col-md-12' style={{boxShadow:"0px 0px 3px 3px #e0dcce"}}>

            <center><br />

                <h2>Group Session</h2><div style={{height:"10px"}}></div>

                <div style={{height:"2px",width:"100px",backgroundColor:"black"}}></div>
                    <div style={{height:"10px"}}></div> 

            </center>       

                <i class="fa fa-circle" aria-hidden="true" style={{fontSize:"8px",marginLeft:"80px"}}></i>
                <span className='ms-2'>{props.right}</span><br />

                <i class="fa fa-circle" aria-hidden="true" style={{fontSize:"8px",marginLeft:"80px"}}></i>
                <span className='ms-2'>{props.fun}</span><br />

                <i class="fa fa-circle " aria-hidden="true" style={{fontSize:"8px",marginLeft:"80px"}}></i>
                <span className='ms-1'>{props.hard}</span><br /><br />

                <center><h2>$299</h2>
                <p>{props.min}</p><br /></center>
           
            </div>

        </div>     

    </div>

</div>

<div style={{height:"100px"}}></div>  

<div className='container-fuild'>

    <div style={{backgroundColor:"#6fcc6c",color:"white"}}>

        <div className='container'>

            <div className='row'>

                <div className='col-md-2'></div>

                <div className='col-md-8'>

                   <div style={{height:"100px"}}></div> 

                      <h2>{props.doc}</h2><br />

                      <p>{props.scope}</p>
                      <br />

                      <center>

                          <div className='row'>

                              <div className='col-md-4'>

                                  <button className='btn3'><b>KNOW MORE</b>
                                  <i class="fa fa-arrow-right ms-1" aria-hidden="true"></i>
                                  </button>

                              </div>

                              <div className='col-md-4'>

                                <button className='btn4'><b>SUCCESS STORY</b>
                                  <i class="fa fa-arrow-right ms-1" aria-hidden="true"></i>
                                </button>

                              </div>

                              <div className='col-md-4'>

                                  <button className='btn3'><b>FREE GUILD</b>
                                  <i class="fa fa-arrow-right ms-1" aria-hidden="true"></i>
                                  </button>

                              </div>

                          </div><div style={{height:'100px'}}></div>

                      </center>

                </div>

            </div>

        </div>

    </div> 

</div>

<div className='bi5'>
  <div style={{height:"100px"}}></div>

  <center>

      <div className='container'>

          <div className='row'>

              <div className='col-md-2'></div>

              <div className='col-md-8' style={{backgroundColor:'white'}}>

                <div className='container'>

                  <center><br />

                      <h1> Meet Me On!</h1>
                      <div style={{height:'2px',width:'12%',backgroundColor:'black'}}></div>

                  </center>

                  <table className='table table-bordered mt-5 ms-2' style={{fontSize:'20px'}}>

                  <tr>
                      <td>Monday</td>
                      <td style={{width:'400px'}}></td>
                      <td>{props.time}</td>
                  </tr>
                      
                  <tr>
                      <td>Tuesday</td>
                      <td ></td>
                      <td>{props.time}</td>  
                  </tr>    

                  <tr>
                      <td>Wednesday</td>
                      <td ></td>
                      <td>10:00AM-4:00PM</td>  
                  </tr>    

                  <tr>
                      <td>Thursday</td>
                      <td ></td>
                      <td>09:30AM-6:00PM</td>  
                  </tr>    

                  <tr>
                      <td>Friday</td>
                      <td ></td>
                      <td>{props.time}</td>  
                  </tr>    

                  <tr>
                      <td>Saturday</td>
                      <td ></td>
                      <td style={{color:'#8de34b'}}>10:00AM-2:00PM</td>  
                  </tr>    

                  <tr>
                      <td style={{color:'#8de34b'}}>Sunday</td>
                      <td ></td>
                      <td style={{color:'#8de34b'}}>Closed</td>
                  </tr>    

                    <div style={{height:'50px'}}></div>      

                  </table>

                </div>

              </div>

              <div className='col-md-2'></div>
            
          </div><div style={{height:'100px'}}></div>   

      </div>

  </center>

</div> 

      
    </>
  )
}
