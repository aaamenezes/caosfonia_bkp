import React from 'react'
import { Link } from 'react-router-dom'

const SubmitButton = props => {

  const classes = `submit ${props.backgroundColor}`

  return (
    <Link to={props.url} className={classes}>{props.text}</Link>
  )
}

export default SubmitButton