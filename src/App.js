import React,{ useState } from 'react'
import Info from './Info'
import Main from './Main'
import Modal from './Modal/Modal'
import Avatar from './Modal/Avatar'
function App() {
  // имя игрока 1
  const [Player1,setPlayer1] = useState('')
  // имя игрока 2
  const [Player2,setPlayer2] = useState('')
  // счет игрока 1
  const [sroce1,setScore1] = useState(0)
  // счет игрока 2
  const [sroce2,setScore2] = useState(0)
  // аватар переключатель
  const [avatar,setAvatar] = useState(false)
  // изменение счета в зависимости от результата игры
  const [avatarPathP1,setPathP1] = useState('./avatar1.png')
  const [avatarPathP2,setPathP2] = useState('./avatar1.png')
  function getScore1(value){
    setScore1(value)
  }
  function getScore2(value){
    setScore2(value)
  }
  // установка имени с формы
  function NickPlayer1(value){
    setPlayer1(value)
  }

  function NickPlayer2(value){
    setPlayer2(value)
  }
  // активатор модалки аватара
  function AvatarActivator(value){
    setAvatar(value)
  }
  // деактиватор модалки аватара
  function AvatarDeactivator(){
    setAvatar(false)
  }
  // получение пути к картинке для 1 игрока
  function AvatarsetterP1(event){
  setPathP1(event.getAttribute('src'))
  }
  // получение пути к картинке для 2 игрока
  function AvatarsetterP2(event){
  setPathP2(event.getAttribute('src'))
  }
  return (
    <div className='container'>
          <div className='app'>
      <Main player1={Player1} player2={Player2} getscore1={getScore1} getscore2={getScore2}/>
      <Info player1={Player1} player2={Player2} scorePlayer1={sroce1} scorePlayer2={sroce2} avatarP1={avatarPathP1} avatarP2={avatarPathP2}/>
        </div>
      <Modal getPlayer1={NickPlayer1} getPlayer2={NickPlayer2} Avatar={AvatarActivator}/>
      {avatar ? <Avatar SetAvatarP1={AvatarsetterP1} SetAvatarP2={AvatarsetterP2} close={AvatarDeactivator} player1={Player1} player2={Player2}/>: null}
    </div>

  )
}
export default App;
