import React,{ useState } from 'react'
import Info from './Info'
import Main from './Main'
import Modal from './Modal/Modal'
function App() {
  const [Player1,setPlayer1] = useState('')
  const [Player2,setPlayer2] = useState('')
  const [sroce1,setScore1] = useState(0)
  const [sroce2,setScore2] = useState(0)
  function getScore1(value){
    setScore1(value)
  }
  function getScore2(value){
    setScore2(value)
  }
  function NickPlayer1(value){
    setPlayer1(value)
  }

  function NickPlayer2(value){
    setPlayer2(value)
  }
  return (
    <div className='container'>
          <div className='app'>
      <Main player1={Player1} player2={Player2} getscore1={getScore1} getscore2={getScore2}/>
      <Info player1={Player1} player2={Player2} scorePlayer1={sroce1} scorePlayer2={sroce2}/>
        </div>
      <Modal getPlayer1={NickPlayer1} getPlayer2={NickPlayer2}/>
    </div>

  )
}
export default App;
