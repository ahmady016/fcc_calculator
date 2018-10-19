import React from 'react'
export default class CalcPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: ''
    }
    this.activateBtn = this.activateBtn.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
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
    this.props.onInput(value);
    // display the user Input
    this.props.onOutput(value);
  }
  handleKeyup({ keyCode }) {
    const targetBtn = this.props.buttons.find(button => button.keyCode === keyCode);
    if(targetBtn)
      this.handleInput(targetBtn);
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