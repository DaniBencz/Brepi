import React from 'react'
import { beer } from '../custom-types' // eslint-disable-line no-unused-vars

const Tile = ({ beer }: { beer: beer }) => {
  return (
    <div key={beer.id}>
      <p>{beer.name}</p>
      <img style={{ height: "100px" }} src={beer.image_url} alt={beer.name}></img>
    </div>
  )
}

export default Tile