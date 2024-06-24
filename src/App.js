import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import LeftSide from './components/LeftSide'
import Carousel from './components/Carousel'
import SaveMoney from './components/SaveMoney'

const slides = [
  {
    image: 'frame_1.png',
    text: '"The first time I used the Samsung Bespoke Jet™, I cried. I`m not being sensational; I really did. Of course, this vacuum worked great. But that`s not all"',
    link: 'https://example.com',
  },
  {
    image: 'frame_2.png',
    text: '"If you`re an over-cleaner, like myself, you`ll nerd out on all of the functions. If you avoid this chore at all costs, you`ll appreciate how simple Samsung makes it"',
    link: 'https://example.com',
  },
  {
    image: 'frame_3.png',
    text: '"Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you`ll never have to tackle hair tangles with a pair of scissors again.)"',
    link: 'https://example.com',
  },
  {
    image: 'frame_4.png',
    text: '"When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that`s when I cried. No more scraping spider legs and hair out of the crevices with my hands. Its suction power is so strong, the canister is left perfectly clean after use. It`s like a vacuum for your vacuum"',
    link: 'https://example.com',
  },
  {
    image: 'frame_5.png',
    text: '"Because it`s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily"',
    link: 'https://example.com',
  },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [animationStage, setAnimationStage] = useState(0)

  useEffect(() => {
    const animationTimeline = [
      { stage: 1, delay: 1000 },
      { stage: 2, delay: 1000 },
      { stage: 3, delay: 600 },
      { stage: 4, delay: 1000 },
      { stage: 5, delay: 400 },
    ]

    let timeoutId
    const runAnimation = index => {
      if (index < animationTimeline.length) {
        timeoutId = setTimeout(() => {
          setAnimationStage(animationTimeline[index].stage)
          runAnimation(index + 1)
        }, animationTimeline[index].delay)
      }
    }

    runAnimation(0)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay) {
        setCurrentSlide(prev => (prev + 1) % slides.length)
      }
    }, 10500)

    return () => clearInterval(interval)
  }, [autoPlay])

  const nextSlide = () => {
    setAutoPlay(false)
    setCurrentSlide(prev => (prev + 1) % slides.length)
    setTimeout(() => setAutoPlay(true), 3000)
  }

  const prevSlide = () => {
    setAutoPlay(false)
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setAutoPlay(true), 3000)
  }

  return (
    <div className="container">
      <Carousel slides={slides} currentSlide={currentSlide} animationStage={animationStage} />
      <Header animationStage={animationStage} />
      <LeftSide
        currentSlide={currentSlide}
        totalSlides={slides.length}
        slideText={slides[currentSlide].text}
        slideLink={slides[currentSlide].link}
        onNext={nextSlide}
        onPrev={prevSlide}
        animationStage={animationStage}
      />
      <SaveMoney animationStage={animationStage} />
    </div>
  )
}

export default App
