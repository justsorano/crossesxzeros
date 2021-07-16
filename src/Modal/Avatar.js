import React from 'react'



function Avatar({SetAvatarP1,SetAvatarP2,close,player1,player2}){
   
   return(
      <div className='avatar'>
         <div className='avatar__body'>
            <h2>Choose Avatar</h2>
            <div className='avatar__title'>
            <h2>Avatar for: {player2}</h2>
            </div>
            <div className='avatar__container'>
               <img className='avatar__img' src='./avatar1.png' alt='avatar' onClick={event => SetAvatarP1(event.target)}></img>
               <img className='avatar__img' src='./avatar2.png' alt='avatar' onClick={event => SetAvatarP1(event.target)}></img>
               <img className='avatar__img' src='./avatar3.png' alt='avatar' onClick={event => SetAvatarP1(event.target)}></img>
            </div>
            <div className='avatar__title'>
            <h2>Avatar for: {player2}</h2>
            </div>
            <div className='avatar__container'>
               <img className='avatar__img' src='./avatar1.png' alt='avatar' onClick={event => SetAvatarP2(event.target)}></img>
               <img className='avatar__img' src='./avatar2.png' alt='avatar' onClick={event => SetAvatarP2(event.target)}></img>
               <img className='avatar__img' src='./avatar3.png' alt='avatar' onClick={event => SetAvatarP2(event.target)}></img>
            </div>
            <button className='avatar__btn btn' onClick={() => close()}>Choose</button>
         </div>
      </div>
   )

}

export default Avatar