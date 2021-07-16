import React,{useState} from 'react'
import Item from './Item'
import Winner from './Modal/Winner'

function Main({player1,player2,getscore1,getscore2}){
   const [turn,setTurn] = useState(0)
   const [result ,setResult] = useState('')
   const [isOpen ,setIsOpen] = useState(false)
   const [score1,setscore1] = useState(0)
   const [score2,setscore2] = useState(0)
   function Click(event){
      if(event.target.className === 'app__content'){
         turn % 2 === 0 ?
         event.target.innerHTML = "<div class='cross'></div>"
         : event.target.innerHTML = "<div class='zero'></div>"
         setTurn(turn+1)
         check()
      }
   }
   function close(){
      const boxes = document.querySelectorAll('.app__content')
      boxes.forEach(i => i.innerHTML = '')
      setIsOpen(false)
   }
   function check(){
      const boxes = document.querySelectorAll('.app__content')
      const arr = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]
      ]
      for(let i = 0;i < arr.length;i++){
         if(
            boxes[arr[i][0]].innerHTML === '<div class="cross"></div>'
         && boxes[arr[i][1]].innerHTML === '<div class="cross"></div>'
         && boxes[arr[i][2]].innerHTML === '<div class="cross"></div>'){
         setResult(player1)
         setIsOpen(true)
         getscore1(score1 + 1)
         setscore1(score1 + 1)
         } else if(
            boxes[arr[i][0]].innerHTML === '<div class="zero"></div>'
         && boxes[arr[i][1]].innerHTML === '<div class="zero"></div>'
         && boxes[arr[i][2]].innerHTML === '<div class="zero"></div>'){
         setResult(player2)
         setIsOpen(true)
         getscore2(score2 + 1)
         setscore2(score2 + 1)
         }
      }
   }



   return  (

      <div className='app__main' onClick={event => Click(event)}>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         {isOpen ? <Winner winner={result} closeWindow={close}/> : null}
      </div>
      
   )
}

export default Main