import React, {useContext} from 'react'
import GlobalContext from '../store/GlobalContext'

const ContextComponent = () => {
  const {state, dispatch} = useContext(GlobalContext)
  return (
    <div className='card'>
      <h2>useContext + useReducer</h2>
      <h4>Name: {state.name}</h4>
      <h4>Count: {state.count}</h4>
      <h4>List:</h4>
    </div>
  )
}

export default ContextComponent