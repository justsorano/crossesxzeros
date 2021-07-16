import React,{useState} from 'react'
import PropTypes from 'prop-types'

function Modal({getPlayer1,getPlayer2,Avatar}){
   const [isOpen,setIsOpen] = useState(true)
   const [Player1,setPlayer1] = useState('')
   const [Player2,setPlayer2] = useState('')
   // изменеия состояние поля input player1
   function SetPlayer1(value){
      setPlayer1(value)
   }
   // изменеия состояние поля input player2
   function SetPlayer2(value){
      setPlayer2(value)
   }
   // установка имен пользователей
   function Nickname(){
      if(Player1 && Player2){
         getPlayer1(Player1.trim())
         getPlayer2(Player2.trim())
         setIsOpen(false)
         Avatar(true)
      }
   }
   // убираем перезагрузку страници у формы
   function SubmitHandler(event){
      event.preventDefault()
   }

   return (
         isOpen ?
         (<div className='modal'>
            <div className='modal__body'>
               <h2>Welcome, tap your nickname and enjoy the game</h2>
                  <form  className='modal__content' onSubmit={SubmitHandler}>
                     <div className='modal__item'>
                        <label className='modal__label'>Player 1: </label>
                        <input className='modal__input' value={Player1}
                        onChange={event => SetPlayer1(event.target.value)} 
                        required />
                           </div>
                           <div className='modal__item'>
                        <label className='modal__label'>Player 2: </label>
                        <input className='modal__input' value={Player2}
                        onChange={event => SetPlayer2(event.target.value)} 
                        required />
                        </div>
                        <button className='btn' onClick={() => Nickname()}>Click</button>
                  </form>
            </div>
         </div>) : null
   )
   }
   Modal.propTypes ={
      getPlayer1: PropTypes.func.isRequired,
      getPlayer2: PropTypes.func.isRequired,
      Avatar: PropTypes.func.isRequired
   }
export default Modal
