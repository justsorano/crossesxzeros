import React,{useState} from 'react'



function Modal({Setname}){
   const [isOpen,setIsOpen] = useState(false)
   const [inputValue,setInputValue] = useState('')

   function SetName(value){
      setInputValue(value)
   }
   
   function Nickname(event){
      if(event.key === "Enter" && inputValue){
         Setname(inputValue)
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
               <h2>Welcome, tap your nickname and enjoy game</h2>
                  <form  className='Form__content' onSubmit={SubmitHandler}>
                     <div className='form__main'>
                        <label className='Form__label'>Name: </label>
                        <input className='Form__input' value={inputValue}
                        onChange={event => SetName(event.target.value)} 
                        onKeyPress={Nickname} required />
                     </div>
                  </form>
            </div>
         </div>) : null
   )
   }
export default Modal
