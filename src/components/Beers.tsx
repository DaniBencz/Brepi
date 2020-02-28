import React from 'react'

type beer = {
  id: number
  name: string
}

export default class Beers extends React.Component {

  state: { beers: beer[] } = {
    beers: []
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(resp => resp.json())
      .then(resp => {
        console.log('resp: ', resp)
        this.setState(prevState => ({ beers: resp }))
      })
  }

  render() {
    return (
      <>
        {this.state.beers.map(beer => {
          return <p key={beer.id}>{beer.name}</p>
        })}
      </>
    )
  }
}