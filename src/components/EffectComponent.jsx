import React, {useEffect, useState} from 'react'
import axios from 'axios'

const EffectComponent = () => {
  const [data, setData] = useState({})

  const getData = () => {
    axios
      .get("https://www.swapi.tech/api/people/1")
      .then((res) => {
        setData(res.data.result.properties)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='card'>
      <h2>useEffect</h2>
      <h3>Name: {data.name}</h3>
    </div>
  )
}

export default EffectComponent