import React from 'react'
import logo from '../logo.svg';

export default ({ title }) => (
  <header className="app-header">
    <img className="app-logo" src={logo} alt="logo" />
    <h1>{title}</h1>
  </header>
)