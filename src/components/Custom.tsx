import React from 'react'
import { useParams } from 'react-router-dom'

type myParams = {
  name: string
}

// const Custom = ({ name }: { name: string }) => {
const Custom = ({ name }: myParams) => {
  let { id } = useParams();
  return (
    <>
      <p>params are: {id}</p>
      <p>props are: {name}</p>
    </>
  )
}

export default Custom