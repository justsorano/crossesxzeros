import React from 'react'



function Info({player1,player2,scorePlayer1,scorePlayer2}){
   return  (
      <div className='app__info'>
         <div className='app__score'>Score: </div>
         <div className='app__player1'>{player1} : {scorePlayer1}</div>
         <div className='app__player2'>{player2} : {scorePlayer2}</div>
      </div>
   )
}

export default Info