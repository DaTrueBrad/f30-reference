import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const DetailScreen = () => {
  const [data, setData] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {

      })
  }, [id])

  return (
    <div>
      <h1>Details</h1>
      <h2>{id}</h2>
      <h2 className='colored-text'>{data.name}</h2>
    </div>
  )
}

export default DetailScreen