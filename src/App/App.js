import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header title="JavaScript Calculator" />
        <Calculator />
        <Footer title="Designed and Coded By Ahmad Hamdy 2018" />
      </Fragment>
    );
  }
}

export default App;
