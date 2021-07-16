import React,{useState} from 'react'



function Modal({getPlayer1,getPlayer2}){
   const [isOpen,setIsOpen] = useState(true)
   const [Player1,setPlayer1] = useState('')
   const [Player2,setPlayer2] = useState('')

   function SetPlayer1(value){
      setPlayer1(value)
   }
   function SetPlayer2(value){
      setPlayer2(value)
   }
   
   function Nickname(){
      if(Player1 && Player2){
         getPlayer1(Player1.trim())
         getPlayer2(Player2.trim())
         setIsOpen(false)
      }
   }
   function SubmitHandler(event){
      event.preventDefault()
   }
   return (
         isOpen ? (
         <div className='modal'>
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
export default Modal
