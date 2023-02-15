'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import ContentBlock from './pallaContent'
import HeaderTsuku from '../../components/header-tsuku'
import './palla.css'

function MyCompoPalla() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="animation_layer parallax item" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <div className="animation_layer parallax item" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax item" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax item" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="animation_layer parallax item" id="jungle5"></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default MyCompoPalla
