import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Calculator from './Calculator';

export default () => (
  <React.Fragment>
    <Header title="JavaScript Calculator" />
    <Calculator />
    <Footer title="Designed and Coded By Ahmad Hamdy 2018" />
  </React.Fragment>
);