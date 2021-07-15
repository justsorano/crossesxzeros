import React from 'react'

export default class Modal extends React.Component {
   state = {
      isOpen: false,
   }
   render() {
      return (
         <React.Fragment >

         </React.Fragment>
      )
   }
}

{/* <button className='btn' onClick={() => {this.setState({isOpen:true})}} >Open Modal</button>
{this.state.isOpen && (
<div className='modal'>
<div className='modal__body'>
<h2>Modal Title</h2>
<p>Modal Text for testing</p>
<button className='btn '  onClick={() => {this.setState({isOpen:false})}}>Close Modal</button>
</div>
</div>
)
} */}