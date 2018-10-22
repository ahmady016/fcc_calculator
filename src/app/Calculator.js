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
    /* hold the inputType [
      'append',
      'replace',
      'op',
      'dot',
      'replaceOp',
      'replaceInput',
      'equals',
      'resumeCalc',
      'clear',
      'none'
    ] */
    this.inputType = 'append';
  }
  handleInput(id, value) {
    // get prev State [input, output]
    const { input, output } = this.state;

    // handle pressing clear
    if(id === 'clear')
      this.inputType = 'clear';
    // handle pressing equals [enter]
    else if(value === '=')
      this.inputType = 'equals';
    // handle pressing these values ['=','+','-','*','/','0'] in the begining
    else if(input === '0' && ['=','+','-','*','/','0'].includes(value))
      this.inputType = 'none';
    // handle pressing numbers ['1','2','3','4','5','6','7','8','9'] in the begining
    else if(input === '0' && ['1','2','3','4','5','6','7','8','9'].includes(value))
      this.inputType = 'replace';
    // handle pressing decimal [dot]
    else if(value === '.' && input.includes('.'))
      this.inputType = 'none';
    // handle pressing decimal [dot] in the begining
    else if(value === '.' && input === '0')
      this.inputType = 'dot';
    // handle pressing a calc opreator ['+','-','*','/'] after equal
    else if(['+','-','*','/'].includes(value) && output.includes('='))
      this.inputType = 'resumeCalc';
    // handle pressing another operator after pressing a calc operator ['+','-','*','/']
    else if(['+','-','*','/'].includes(value) && ['+','-','*','/'].includes(output[output.length-1]))
      this.inputType = 'replaceOp';
    // handle pressing calc opreator ['+','-','*','/']
    else if(['+','-','*','/'].includes(value))
      this.inputType = 'op';
    // handle pressing numbers after pressing a calc operator ['+','-','*','/']
    else if(['+','-','*','/'].includes(output[output.length-1]) )
      this.inputType = 'replaceInput';
    // handle pressing any key but not operator after equal
    else if(output.includes('=') && !['+','-','*','/'].includes(value))
      this.inputType = 'replace';
    // handle exceeds number length
    else if(input.length > 12)
      this.inputType = 'none';
    // handle pressing numbers !['=','+','-','*','/','0','.']
    else
      this.inputType = 'append';

    // setState [input, output] based on inputType
    if (this.inputType === 'append')
      this.setState({ input: input+value, output: output+value });
    else if(this.inputType === 'replace')
      this.setState({ input: value, output: value });
    else if(this.inputType === 'dot')
      this.setState({input: '0.', output: '0.' });
    else if(this.inputType === 'op')
      this.setState({ output: output+value });
    else if(this.inputType === 'replaceOp')
      this.setState({ output: output.slice(0, -1)+value });
    else if(this.inputType === 'replaceInput')
      this.setState({ input: value, output: output+value });
    else if(this.inputType === 'equals')
      this.setState({ input: eval(output), output: output +' = '+ eval(output) });
    else if(this.inputType === 'resumeCalc')
      this.setState({ output: input+value });
    else if(this.inputType === 'clear')
      this.setState({ output: '', input: '0' });   
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