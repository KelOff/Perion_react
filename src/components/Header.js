import React from 'react'
import './Header.css'

function Header({ animationStage }) {
  return (
    <div className="header">
      <div className="header_animation">
        <div
          className={`logo ${animationStage >= 1 ? 'animate-logo-left' : ''} ${
            animationStage >= 2 ? 'animate-logo-up' : ''
          }`}
        >
          <img src="samsung_logo.png" alt="samsung_logo" />
        </div>
        <div className="header_text">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className={`text_header ${animationStage >= 3 ? 'animate-text-left' : ''} ${
                animationStage >= 4 ? 'animate-text-bot' : ''
              }`}
            >
              {i === 1 && 'See why the Bespoke Jet™'}
              {i === 2 && `is "so good" it made this`}
              {i === 3 && (
                <>
                  <span className="kichn_logo">
                    <img src="kichn_logo.png" alt="kichn_logo" />
                  </span>{' '}
                  journalist cry
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
