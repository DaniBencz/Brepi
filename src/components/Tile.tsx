import React from 'react'
// eslint-disable-next-line
import { beer } from '../custom-types'

interface TileProps {
  beer: beer
}

//const Tile = (props: TileProps) => {
//  const {beer} = props
const Tile = ({ beer }: { beer: beer }) => {
  return (
    <div className="tile">
      <p className="title">{beer.name}</p>
      <img style={{ height: "100px" }} src={beer.image_url} alt={beer.name}></img>
    </div>
  )
}

export default Tile