import {useState, useEffect} from "react";
import styles from "./App.scss";
import Particles from "react-tsparticles";

function App() {

  const [speed, setSpeed] = useState(5);
  const [opacity, setOpacity] = useState(0.5);
  const [size, setSize] = useState(5);
  const [linksColor, setLinksColor] = useState();
  const [backgroundColor, setBackgroundColor] = useState();
  const [particlesColor, setParticlesColor] = useState();
  const [type, setType] = useState();




  return (
    <div className="App">
      <div className="panel">
        <h3>Enter your preferences to see the particles</h3>
        <label>Speed</label>
        <input
          type="range"
          name=""
          id=""
          onChange={(e) => setSpeed(e.target.value / 10)}
        />
        <label>Opacity</label>
        <input
          type="range"
          name=""
          id=""
          onChange={(e) => setOpacity(e.target.value / 100)}
        />

        <label>Size</label>
        <input
          type="range"
          name=""
          id=""
          onChange={(e) => setSize(e.target.value / 5)}
        />
        <hr/>
        <label> Links Color </label>
        <input
          type="color"
          name=""
          id=""
          onChange={(e) => setLinksColor(e.target.value)}
        />
        <hr/>
        <label> Background Color </label>
        <input
          type="color"
          name=""
          id=""
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <hr/>
        <label> Particles Color </label>
        <input
          type="color"
          name=""
          id=""
          onChange={(e) => setParticlesColor(e.target.value)}
        />
        <hr/>

        <label> Shape </label>
        <button onClick={(e) => setType("square")}> &#11036; </button>

        <button onClick={(e) => setType("circle")}> &#9898; </button>



      </div>
      
      <div className="wrapper">
        <Particles
          options={{
            background: {
              color: {
                value:  `${backgroundColor !== undefined ? backgroundColor : "#3f3f3f"}`,
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: `${particlesColor !== undefined ? particlesColor : "#fff"}`,
              },
              links: {
                color: `${linksColor  !== undefined ? linksColor : "#ff00ff"}`,
                distance: 200,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: speed,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 180,
              },
              opacity: {
                value: opacity,
              },
              shape: {
                type: type,
              },
              size: {
                random: true,
                value: size,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </div>
  );
}

export default App;
