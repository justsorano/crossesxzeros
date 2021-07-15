import React from 'react'



function Info({nick}){
   return  (
      <div className="app__info">
         <div className="app__score">Score: </div>
         <div className="app__player1">Player: {nick}</div>
         <div className="app__player2">Player 2: Enemy</div>
      </div>
   )
}

export default Info