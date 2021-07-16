import React from 'react'



function Winner({winner}){
   return(
      <div className='winner'>
         <div className='winner__body'>
            <h2>{winner} Winner c:</h2>
      <form>
      <button className='btn' type='submit'>Start again</button>
      </form>
         </div>
      </div>
      )
   }
export default Winner
