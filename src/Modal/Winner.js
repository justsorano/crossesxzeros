import React from 'react'



function Winner({winner,closeWindow}){

   function submitHandler(event){
      event.preventDefault()
   }
   return(
      <div className='winner'>
         <div className='winner__body'>
            <h2>{winner} Winner c:</h2>
      <form onSubmit={submitHandler}>
      <button className='btn' type='button' onClick={() =>closeWindow()}>Start again</button>
      </form>
         </div>
      </div>
      )
   }
export default Winner
