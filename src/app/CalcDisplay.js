import React from 'react'

export default ({ input, output }) => {
  return (
    <section id="display">
      <div className="output">{output}</div>
      <div className="input">{input}</div>
    </section>
  )
}
