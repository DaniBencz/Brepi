import React from 'react'

type beer = {
  id: number
  name: string
}

export default class BeersClass extends React.Component {

  state: { beers: beer[] } = {
    beers: []
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=6')
      .then(resp => resp.json())
      .then(resp => {
        console.log('resp: ', resp)

        // send resp to redux

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