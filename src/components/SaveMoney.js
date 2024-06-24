import React from 'react'
import './SaveMoney.css'

function SaveMoney({ animationStage }) {
  return (
    <div className={`saveMoney ${animationStage >= 1 ? 'animate-logo-left' : ''}`}>
      <h1>Bespoke Jet™</h1>
      <p>Save $400 Now</p>
    </div>
  )
}

export default SaveMoney
