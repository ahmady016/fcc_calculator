import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Calculator from './Calculator';

export default () => (
  <Fragment>
    <Header title="JavaScript Calculator" />
    <Calculator />
    <Footer title="Designed and Coded By Ahmad Hamdy 2018" />
  </Fragment>
);