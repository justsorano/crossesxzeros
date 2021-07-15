import React,{ useState,useEffect } from 'react'
import Info from './Info'
import Main from './Main'
import Modal from './Modal/Modal'
function App() {
  const [nick,setNick] = useState()
  function setNickname(name){
      setNick(name)
  }

  return (
    <div className='container'>
          <div className="app">
      <Main/>
      <Info nick={nick}/>
        </div>
      <Modal Setname={setNickname}/>
    </div>

  )
}
export default App;
