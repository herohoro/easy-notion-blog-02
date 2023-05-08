'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '../../components/footer'
import HeaderTsuku from '../../components/header-tsuku'
import './palla.css'
import ContentBlock from './components/pallaContent'
import ContentBlock02 from './components/pallaContent02'
import ContentBlock03 from './components/pallaContent03'
import ContentBlock04 from './components/pallaContent04'

function MyCompoPalla() {
  return (
    <div
      className="App"
      style={{ width: '100%', height: '100%', background: '#f2edde' }}
    >
      <Parallax
        pages={6}
        style={{ top: '0', left: '0', background: '#f2edde' }}
        className="animation"
      >
        <ParallaxLayer offset={1} speed={1}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} sticky={{ start: 0, end: 5 }}>
          <HeaderTsuku />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.0}
          speed={1}
          style={{ backgroundColor: '#87BCDE', opacity: '0.1' }}
        />
        <ParallaxLayer
          offset={3.0}
          speed={1}
          style={{ backgroundColor: '#cf72ab', opacity: '0.1' }}
        />
        <ParallaxLayer
          offset={4.0}
          speed={1}
          style={{ backgroundColor: '#87BCDE', opacity: '0.1' }}
        />

        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.5} id="textblock">
          <ContentBlock />
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} speed={0.1}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.1}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.1}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.2}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} id="textblock">
          <ContentBlock02 />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5} id="textblock">
          <ContentBlock03 />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5} id="textblock">
          <ContentBlock04 />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.1}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={-0.2}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.2}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={-0.4}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.7}
          speed={-0.5}
          style={{ backgroundPosition: 'bottom center' }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default MyCompoPalla
