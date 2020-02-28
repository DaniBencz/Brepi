import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'
// eslint-disable-next-line
import { beer, beers } from '../custom-types'

const BeersTSX = (props: any) => {

  const { beers }: { beers: beers } = props
  const { add }: { add: (beers: beers) => {} } = props
  const { page }: { page: number } = props

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=6`)
      .then(resp => resp.json())
      .then(resp => {
        console.log('resp: ', resp)
        add(resp)
      })
  }, [add, page]) // if no 2nd parameter (e.g.[]) is provided, it will run endlessly

  return (
    <>
      {beers.map((beer: beer) => {
        return (
          <Tile beer={beer} />
        )
      })}
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    beers: state.beers,
    page: state.page
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    add: (resp: beers) => {
      dispatch({ type: 'ADD', beers: resp })
    }
  }
}

const Beers = connect(mapStateToProps, mapDispatchToProps)(BeersTSX)

export default Beers