'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '../../components/footer'
// import ContentBlock from './pallaContent'
import HeaderTsuku from '../../components/header-tsuku'
import './palla.css'
import ContentBlock from './pallaContent'
import ContentBlock02 from './pallaContent02'
import ContentBlock03 from './pallaContent03'
import ContentBlock04 from './pallaContent04'

function MyCompoPalla() {
  return (
    <div className="App">
      <Parallax
        pages={6}
        style={{ top: '0', left: '0' }}
        className="animation basePage"
      >
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax item" id="artback"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.25}>
          <HeaderTsuku />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1}>
          <div className="animation_layer parallax item" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-0.2}>
          <div className="animation_layer parallax item" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <div className="animation_layer parallax item" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-0.2}>
          <div className="animation_layer parallax item" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <div className="animation_layer parallax item" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} id="textblock">
          <ContentBlock />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1}>
          <div className="animation_layer parallax item" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.1}>
          <div className="animation_layer parallax item" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.1}>
          <div className="animation_layer parallax item" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <div className="animation_layer parallax item" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <div className="animation_layer parallax item" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} id="textblock">
          <ContentBlock02 />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5} id="textblock">
          <ContentBlock03 />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5} id="textblock">
          <ContentBlock04 />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.1}>
          <div className="animation_layer parallax item" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={-0.2}>
          <div className="animation_layer parallax item" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.2}>
          <div className="animation_layer parallax item" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={-0.4}>
          <div className="animation_layer parallax item" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5}>
          <div className="animation_layer parallax item" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.5} id="textblock bottonPosition">
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default MyCompoPalla
