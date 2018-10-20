import React from 'react'
import CalcDisplay from './CalcDisplay';
import CalcPad from './CalcPad';
import calcButtons from '../calcButtons';

export default class Calculator extends React.Component {
  constructor() {
    super();
    // component state
    this.state = {
      input: '0',
      output: ''
    }
    // event handlers
    this.handleInput = this.handleInput.bind(this);
    // hold the inputType ['append','replace','op','replaceInput','equals','none']
    this.inputType = 'append';
  }
  handleInput(id, value) {
    const { input, output } = this.state;
    // handle pressing these values ['=','+','-','*','/','0'] in the begining
    if(input === '0' && ['=','+','-','*','/','0'].includes(value) )
      this.inputType = 'none';
    // handle pressing numbers values !['=','+','-','*','/','0','.'] in the begining
    else if(input === '0' && !['=','+','-','*','/','0','.'].includes(value) )
      this.inputType = 'replace';
    // handle pressing clear
    else if(id === 'clear')
      this.inputType = 'replace';
    // handle pressing decimal [dot]
    else if(input.includes('.') && value === '.')
      this.inputType = 'none';
    // handle pressing calc opreator ['+','-','*','/']
    else if(['+','-','*','/'].includes(value))
      this.inputType = 'op';
    // handle pressing numbers after pressing a calc operator ['+','-','*','/']
    else if( ['+','-','*','/'].includes(output[output.length-1]) )
      this.inputType = 'replaceInput';
    // handle pressing equals [enter]
    else if(value === '=')
      this.inputType = 'equals';
    // handle exceeds number length
    else if(input.length > 12)
      this.inputType = 'none';
    // handle pressing numbers
    else
      this.inputType = 'append';
    // set component state
    if (this.inputType === 'append')
      this.setState({ input: input+value, output: output+value });
    else if(this.inputType === 'replace')
      this.setState({ input: value, output: value });
    else if(this.inputType === 'op')
      this.setState({ output: output+value });
    else if(this.inputType === 'replaceInput')
      this.setState({ input: value, output: output+value });
    else if(this.inputType === 'equals')
      this.setState({ input: eval(output), output: output+' = '+eval(output) });
  }
  render() {
    return (
      <main>
        <CalcDisplay {...this.state} />
        <CalcPad buttons={calcButtons} onInput={this.handleInput} />
      </main>
    )
  }
}