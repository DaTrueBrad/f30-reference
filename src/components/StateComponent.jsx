import React, {useState} from 'react'

const StateComponent = () => {
  const [userInput, setUserInput] = useState("")

  const handleUpdateState = (event) => setUserInput(event.target.value)

  return (
    <div className='card'>
      <h2>useState</h2>
      <h3>State: {userInput}</h3>
      <input type="text" onChange={handleUpdateState}/>
    </div>
  )
}

export default StateComponent