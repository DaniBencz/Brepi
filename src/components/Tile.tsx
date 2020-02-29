import React from 'react'
// eslint-disable-next-line
import { beer } from '../custom-types'

const Tile = ({ beer }: { beer: beer }) => {
  return (
    <div>
      <p>{beer.name}</p>
      <img style={{ height: "100px" }} src={beer.image_url} alt={beer.name}></img>
    </div>
  )
}

export default Tile