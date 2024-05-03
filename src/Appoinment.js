import React from 'react'

export default function Appoinment(props) {
  return (
    <>

<div className='bi6'>
    <div style={{height:'100px'}}></div>

      <center>

          <h1 id='f'>Get In Touch!</h1>

          <div style={{height:'2px',width:'7%',backgroundColor:'black'}}></div>
            <br />

          <span><input type='text' placeholder='Your Name' style={{height:'40px',backgroundColor:'#f7fcff',border:'1px solid lightgrey'}} className='p-2' />

          <input type='email' placeholder='Your Email' className='ms-3 p-2'  style={{height:'40px',backgroundColor:'#f7fcff',border:'1px solid lightgrey'}} />
          </span>
          
          <br /><br />

          <span><input type='number' placeholder='Phone Number' style={{height:'40px',backgroundColor:'#f7fcff',border:'1px solid lightgrey'}} className='p-2' />

          <input type='text' placeholder='Subject' className='ms-3 p-2'  style={{height:'40px',backgroundColor:'#f7fcff',border:'1px solid lightgrey'}} />
          </span>
          
          <br /><br />

          <textarea type='text' placeholder='Your Message' style={{height:'100px',width:'420px',backgroundColor:'#f7fcff',border:'1px solid lightgrey'}} className='p-2'></textarea>

          <br /><br />

          <button style={{marginRight:'230px'}} className='btn5'><b>{props.input}</b></button>
          
           <div style={{height:'100px'}}></div>   
      </center>

  </div>
      
    </>
  )
}
