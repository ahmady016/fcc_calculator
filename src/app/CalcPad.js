import React from 'react'
export default class CalcPad extends React.Component {
  constructor(props) {
    super(props);
    // component state
    this.state = {
      activeBtn: ''
    }
    // event handlers
    this.activateBtn = this.activateBtn.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    // class variables
    // hold the pressed button onKeyUp event
    this.button = null;
  }
  activateBtn(id = '') {
    this.setState((state) => ({
      activeBtn: id
    }))
  }
  handleInput({ id, value }) {
    // set active styles on and off after 200ms
    this.activateBtn(id);
    setTimeout(this.activateBtn, 200);
    // display the user Input
    this.props.onInput(id, value);
  }
  handleKeyup({ keyCode }) {
    this.button = this.props.buttons.find(button => button.keyCode === keyCode);
    if(this.button)
      this.handleInput(this.button);
  }
  render() {
    const { activeBtn } = this.state;
    const buttons = this.props.buttons
      .map( button => (
        <div  className={ (button.id === activeBtn)? 'calc-btn active' : 'calc-btn' }
              key={button.key}
              id={button.id}
              onClick={() => this.handleInput(button)} >
          {button.key}
        </div>
      ));
    return (
      <section id="calc-pad">
        { buttons }
      </section>
    )
  }
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }
}