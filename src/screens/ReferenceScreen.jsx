import React from 'react'
import StateComponent from '../components/StateComponent'
import EffectComponent from '../components/EffectComponent'
import RefComponent from '../components/RefComponent'
import ContextComponent from '../components/ContextComponent'
import Interact from '../components/Interact'

const ReferenceScreen = () => {
  return (
    <div className='col-container'>
      <h1>Reference</h1>
      <StateComponent />
      <EffectComponent />
      <RefComponent />
      <ContextComponent />
      <Interact />
    </div>
  )
}

export default ReferenceScreen