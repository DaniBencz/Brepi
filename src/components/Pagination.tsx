import React from 'react'
import { connect } from 'react-redux'

interface PagProps {
  page: number,
  change: (page: number) => void
}

const PaginationJSX = (props: PagProps) => {

  const { page }: { page: number } = props
  const { change }: { change: (page: number) => void } = props

  return (
    <>
      <h3>Pagination</h3>
      <button className="button" onClick={() => { change(page - 1) }}>Previous Page</button>
      <button className="button" onClick={() => { change(page + 1) }}>Next Page</button>
    </>
  )
}

const mapStateToProps = (state: { page: number }) => {
  return {
    page: state.page
  }
}

// what is the type of dispatch?
const mapDispatchToProps = (dispatch: any) => {
  return {
    change: (page: number) => {
      dispatch({ type: 'CHANGE', page })
    }
  }
}

const Pagination = connect(mapStateToProps, mapDispatchToProps)(PaginationJSX)

export default Pagination