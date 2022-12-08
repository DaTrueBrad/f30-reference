import React, {useContext, useRef} from 'react'
import GlobalContext from '../store/GlobalContext'

const Interact = () => {
  const nameRef = useRef()
  const itemRef = useRef()

  const {state, dispatch} = useContext(GlobalContext)

  const changeName = (e) => {
    e.preventDefault()
    dispatch({type: "CHANGENAME", payload: nameRef.current.value})
    nameRef.current.value = ""
    nameRef.current.focus()
  }

  const increase = () => dispatch({type: "INCREASE"})
  const decrease = () => dispatch({type: 'DECREASE'})
  const addToList = (e) => {
    e.preventDefault()
    dispatch({type: 'ADDTOLIST', payload: itemRef.current.value})
    itemRef.current.value = ""
    itemRef.current.focus()
  }

  return (
    <div className='card'>
      <h2>Interact</h2>
      <form onSubmit={changeName}>
        <h3>Change Name</h3>
        <input type="text" ref={nameRef}/>
        <button>Change it!</button>
      </form>
      <form onSubmit={addToList}>
        <h3>Add to List</h3>
        <input type="text" ref={itemRef}/>
        <button>Add</button>
      </form>
      <button onClick={increase}>Up Count</button>
      <button onClick={decrease}>Down Count</button>
    </div>
  )
}

export default Interact