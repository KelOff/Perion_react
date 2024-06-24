import React from 'react'
import './Carousel.css'

function Carousel({ slides, currentSlide, animationStage }) {
  return (
    <div className={`carousel ${animationStage >= 5 ? 'animate-carousel_side' : ''}`}>
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Frame ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
