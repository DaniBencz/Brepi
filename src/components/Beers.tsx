import React, { useEffect } from 'react'
import { connect } from 'react-redux'

type beer = {
  id: number
  name: string
}

type beers = {
  beers: []
}

const BeersTSX = (props: any) => {

  const { beers }: beers = props
  const { add }: { add: (x: beers) => {} } = props

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=6')
      .then(resp => resp.json())
      .then(resp => {
        console.log('resp: ', resp)
        // send resp to redux
        add(resp)
      })
  }, [add])

  return (
    <>
      {beers.map((beer: beer) => {
        return <p key={beer.id}>{beer.name}</p>
      })}
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    beers: state.beers
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