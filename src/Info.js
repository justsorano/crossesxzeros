import React from 'react'
import PropTypes from 'prop-types'

// Правая часть игры с информацией
function Info({player1,player2,scorePlayer1,scorePlayer2,avatarP1,avatarP2}){
   return  (
      <div className='app__info'>
         <div className='app__score'>Score: </div>
         <div className='app__player player1'>
            <img src={avatarP1} alt='avatar ' className='app__avatar'></img>
            {player1} : {scorePlayer1}
            </div>
         <div className='app__player player2'>
         <img src={avatarP2} alt='avatar ' className='app__avatar'></img>
            {player2} : {scorePlayer2}
            </div>
      </div>
   )
}
Info.propTypes ={
   player1: PropTypes.string.isRequired,
   player2: PropTypes.string.isRequired,
   avatarP1: PropTypes.string.isRequired,
   avatarP2: PropTypes.string.isRequired,
   scorePlayer1: PropTypes.number.isRequired,
   scorePlayer2: PropTypes.number.isRequired
}
export default Info