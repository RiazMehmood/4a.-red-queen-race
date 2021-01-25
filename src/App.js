import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import { Foreground1 } from './components/Foreground1';
import { Foreground2 } from './components/Foreground2';
import { Background1 } from './components/Background1';
import { Background2 } from './components/Background2';
import { useEffect } from 'react';

function App() {

  let redQueen_alicePlayBack = 1;
  let backGroundPlayBack = 0;

  const sceneryFrames = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
  ];
  
  const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
    playbackRate: backGroundPlayBack
  };

  const background2 = useWebAnimations({
      keyframes: sceneryFrames,
      timing: sceneryTimingBackground
  })
  
  const background1 = useWebAnimations({
      keyframes: sceneryFrames,
      timing: sceneryTimingBackground
  })

  const sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity,
    playbackRate: backGroundPlayBack
  };
  
  const foreground1 = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
  })

  const foreground2 = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
  })

  const spriteFrames = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }
  ];

  const redQueen_alice = useWebAnimations({
    keyframes: spriteFrames,
    timing: {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    },
  });


  useEffect(() => {

    setInterval(function () {
      if (redQueen_alicePlayBack > .4) {
        redQueen_alicePlayBack *= .9
        redQueen_alice.getAnimation().playbackRate = redQueen_alicePlayBack;
      }
      adjustBackgroundPlayback();
    }, 3000);

    document.addEventListener('click', () => {
      redQueen_alicePlayBack *= 1.1
      redQueen_alice.getAnimation().playbackRate = redQueen_alicePlayBack;
      adjustBackgroundPlayback()
    })
  })

  const adjustBackgroundPlayback = () => {
    if (redQueen_alicePlayBack < .8) {
      backGroundPlayBack = (redQueen_alicePlayBack / 2) * -1;
    }
    else if (redQueen_alicePlayBack > 1.2) {
      backGroundPlayBack = redQueen_alicePlayBack / 2;
    }
    else {
      backGroundPlayBack = 0;
    }
    foreground1.getAnimation().playbackRate = backGroundPlayBack;
    foreground2.getAnimation().playbackRate = backGroundPlayBack;
    background1.getAnimation().playbackRate = backGroundPlayBack;
    background2.getAnimation().playbackRate = backGroundPlayBack;
  }

  adjustBackgroundPlayback();

console.log(foreground1.getAnimation());
  return (
    <div>
      <div className="sky"></div>
      <div className="earth">
      <div id="red-queen_and_alice">
        <img ref={redQueen_alice.ref} id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
      </div>
      </div>
      <Foreground1 foreground1={foreground1}/>
      <Foreground2 foreground2={foreground2}/>
      <Background1 background1={background1}/>
      <Background2 background2={background2}/>

    </div>
  );
}

export default App;
