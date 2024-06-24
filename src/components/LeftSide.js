import React, { useEffect, useState } from 'react'
import './LeftSide.css'

function LeftSide({
  currentSlide,
  totalSlides,
  slideText,
  slideLink,
  onNext,
  onPrev,
  animationStage,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isPrevHovered, setIsPrevHovered] = useState(false)
  const [isNextHovered, setIsNextHovered] = useState(false)

  useEffect(() => {
    if (animationStage >= 5) {
      setTimeout(() => setIsVisible(true), 100)
    }
  }, [animationStage])

  return (
    <div className={`left-side ${isVisible ? 'animate-side' : ''}`}>
      <div className="text">
        <p id="slide-text">
          {slideText}{' '}
          <a href={slideLink} className="read_more" target="_blank" rel="noopener noreferrer">
            Read more...
          </a>
        </p>
      </div>
      <div className="buttons">
        <div className="indicators">
          <button
            className="prev"
            onClick={onPrev}
            onMouseEnter={() => setIsPrevHovered(true)}
            onMouseLeave={() => setIsPrevHovered(false)}
          ></button>
          <span className="current-slide">
            {currentSlide + 1}/{totalSlides}
          </span>
          <button
            className="next"
            onClick={onNext}
            onMouseEnter={() => setIsNextHovered(true)}
            onMouseLeave={() => setIsNextHovered(false)}
          ></button>
        </div>
        <div className="shop-now-block">
          <a href="about:blank" className="shop-now">
            <span className="pulse-text">SAVE $400 NOW</span>
          </a>
        </div>
      </div>
      <div className="top_logo">Bespoke Jet™</div>
      <div className="bottom_logo_animated">
        *See site for details, pricing from 3/2 to 3/29 while supplies last
      </div>
    </div>
  )
}

export default LeftSide
