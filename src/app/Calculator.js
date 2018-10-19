import React from 'react'
import CalcDisplay from './CalcDisplay';
import CalcPad from './CalcPad';
import calcButtons from '../calcButtons';

export default ({ buttons }) => {
  return (
    <main>
      <CalcDisplay />
      <CalcPad buttons={calcButtons} />
    </main>
  )
}