import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const ReduxComponent = () => {
  const dispatch = useDispatch()
  const name = useSelector(state => state.name)
  const count = useSelector(state => state.count)

  return (
    <div className='card'>
      <h2>Redux</h2>
      <ul>
        <li>name: {name}</li>
        <li>count: {count}</li>
      </ul>
    </div>
  )
}

export default ReduxComponent