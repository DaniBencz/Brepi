import React from 'react'
import { connect } from 'react-redux'

const PaginationJSX = (props: any) => {
  return (
    <>
      <p>Pagination</p>
      <button onClick={() => { props.change(2) }}>Change Page</button>
    </>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    change: (page: number) => {
      dispatch({ type: 'CHANGE', page })
    }
  }
}

const Pagination = connect(null, mapDispatchToProps)(PaginationJSX)

export default Pagination