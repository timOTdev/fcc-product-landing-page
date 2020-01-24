// PACKAGE IMPORTS
import React from 'react'

// LOCAL IMPORTS
import './Carousel.scss'

const sources = [
  '/static/hero1.jpg',
  '/static/hero2.jpg',
]

const Slide = ({ url }: any) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '970px',
    height: '300px',
    borderRadius: '3px',
    border: '10px solid lightgray',
  };
  return (
    <div className="image-slide" style={styles}></div>
  )
}

const Arrow = ({ direction, clickFunction, glyph }: any) => (
  <div
    className={`arrow ${direction}`}
    onClick={clickFunction}>
    {glyph}
  </div>
);

class Carousel extends React.Component {
  state = {
    currentIndex: 0,
  }

  prev = () => {
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: sources.length - 1 })
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 })
    }
  }

  next = () => {
    if (this.state.currentIndex >= sources.length - 1) {
      this.setState({ currentIndex: 0 })
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    }
  }

  render() {
    const { currentIndex } = this.state
    return (
      <main id="carousel">
        <Arrow direction="left" clickFunction={this.prev} glyph="&#9664;" />
        <Slide url={sources[currentIndex]} />
        <Arrow direction="right" clickFunction={this.next} glyph="&#9654;" />
      </main>
    )
  }
}

export default Carousel
