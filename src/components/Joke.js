import React from 'react'

const Joke = (props) => {
  return (
    <div>
        <h1>{props.setup}</h1>
        <h3>{props.punchline}</h3>
    </div>
  )
}

export default Joke