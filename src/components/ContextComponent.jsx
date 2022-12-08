import React, {useContext} from 'react'
import GlobalContext from '../store/GlobalContext'

const ContextComponent = () => {
  const {state} = useContext(GlobalContext)
  return (
    <div className='card'>
      <h2>useContext + useReducer</h2>
      <h4>Name: {state.name}</h4>
      <h4>Count: {state.count}</h4>
      <h4>List:</h4>
      <ul>
        {state.list.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ContextComponent