import React from 'react'
import CalcDisplay from './CalcDisplay';
import CalcPad from './CalcPad';
import calcButtons from '../calcButtons';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '0',
      output: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleOutput = this.handleOutput.bind(this);
  }
  handleInput(input) {
    this.setState({
      input
    })
  }
  handleOutput(output) {
    this.setState({
      output
    })
  }
  render() {
    return (
      <main>
        <CalcDisplay {...this.state} />
        <CalcPad
          buttons={calcButtons}
          onInput={this.handleInput}
          onOutput={this.handleOutput}
        />
      </main>
    )
  }
}