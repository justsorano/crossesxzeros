import React from 'react'



function Winner({winner,closeWindow,Draw}){

   // убираем перезагрузку страници у формы
   function submitHandler(event){
      event.preventDefault()
   }
   // возвращаем либо табличку победителей либо ничью по условию
   return(
      winner && Draw === false ?
      (<div className='winner'>
         <div className='winner__body'>
            <h2>{winner} Winner c:</h2>
               <form onSubmit={submitHandler}>
                  <button className='btn'
                  type='button' 
                  onClick={() =>closeWindow()}>Start again</button>
               </form>
         </div>
      </div>)
      : winner === false && Draw ?
      (<div className='winner'>
         <div className='winner__body'>
            <h2>Draw,try again</h2>
            <button className='btn' 
            type='button' 
            onClick={() =>closeWindow()}>Start again</button>
         </div>
      </div>
         ) : null
      )
   }
export default Winner
