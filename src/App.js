import './App.css';
// import useWebAnimations from "@wellyshen/use-web-animations";
import { Foreground1 } from './components/Foreground1';
import { Foreground2 } from './components/Foreground2';
import { Background1 } from './components/Background1';
import { Background2 } from './components/Background2';
import { useRef, useLayoutEffect } from 'react';

function App() {

//   let redQueen_alicePlayBack = 1;
//   let backGroundPlayBack = 0;

//   const sceneryFrames = [
//     { transform: 'translateX(100%)' },
//     { transform: 'translateX(-100%)' }
//   ];
  
//   const sceneryTimingBackground = {
//     duration: 36000,
//     iterations: Infinity,
//     playbackRate: backGroundPlayBack
//   };

//   const background2 = useWebAnimations({
//       keyframes: sceneryFrames,
//       timing: sceneryTimingBackground
//   })
  
//   const background1 = useWebAnimations({
//       keyframes: sceneryFrames,
//       timing: sceneryTimingBackground
//   })

//   const sceneryTimingForeground = {
//     duration: 12000,
//     iterations: Infinity,
//     playbackRate: backGroundPlayBack
//   };
  
//   const foreground1 = useWebAnimations({
//     keyframes: sceneryFrames,
//     timing: sceneryTimingForeground,
//   })

//   const foreground2 = useWebAnimations({
//     keyframes: sceneryFrames,
//     timing: sceneryTimingForeground,
//   })

//   const spriteFrames = [
//     { transform: 'translateY(0)' },
//     { transform: 'translateY(-100%)' }
//   ];

//   const redQueen_alice = useWebAnimations({
//     keyframes: spriteFrames,
//     timing: {
//       easing: 'steps(7, end)',
//       direction: "reverse",
//       duration: 600,
//       playbackRate: 1,
//       iterations: Infinity
//     },
//   });


//   useEffect(() => {

//     setInterval(function () {
//       if (redQueen_alicePlayBack > .4) {
//         redQueen_alicePlayBack *= .9
//         redQueen_alice.getAnimation().playbackRate = redQueen_alicePlayBack;
//       }
//       adjustBackgroundPlayback();
//     }, 3000);

//     document.addEventListener('click', () => {
//       redQueen_alicePlayBack *= 1.1
//       redQueen_alice.getAnimation().playbackRate = redQueen_alicePlayBack;
//       adjustBackgroundPlayback()
//     })
//   })

//   const adjustBackgroundPlayback = () => {
//     if (redQueen_alicePlayBack < .8) {
//       backGroundPlayBack = (redQueen_alicePlayBack / 2) * -1;
//     }
//     else if (redQueen_alicePlayBack > 1.2) {
//       backGroundPlayBack = redQueen_alicePlayBack / 2;
//     }
//     else {
//       backGroundPlayBack = 0;
//     }
//     foreground1.getAnimation().playbackRate = backGroundPlayBack;
//     foreground2.getAnimation().playbackRate = backGroundPlayBack;
//     background1.getAnimation().playbackRate = backGroundPlayBack;
//     background2.getAnimation().playbackRate = backGroundPlayBack;
//   }

//   adjustBackgroundPlayback();

// console.log(foreground1.getAnimation());

var background1 = useRef(null);
var background2 = useRef(null);
var foreground1 = useRef(null);
var foreground2 = useRef(null);
var aliceandqueen = useRef(null);

useLayoutEffect(() => {
  var sceneryFrames = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
  ];

  var sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
  };

  var sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity
  };

  var background1Movement = background1.current.animate(
    sceneryFrames, sceneryTimingBackground
    );
  background1Movement.currentTime = background1Movement.effect.getTiming().duration / 2;

  var background2Movement = background2.current.animate(
    sceneryFrames, sceneryTimingBackground);

  var foreground1Movement = foreground1.current.animate(
    sceneryFrames, sceneryTimingForeground);
  foreground1Movement.currentTime = foreground1Movement.effect.getTiming().duration / 2;

  var foreground2Movement = foreground2.current.animate(
    sceneryFrames, sceneryTimingForeground);

  var spriteFrames = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }
  ];

  var redQueen_alice = aliceandqueen.current.animate(
    spriteFrames, {
    easing: 'steps(7, end)',
    direction: "reverse",
    duration: 600,
    playbackRate: 1,
    iterations: Infinity
  });

  var sceneries = [foreground1Movement, foreground2Movement, background1Movement, background2Movement];

  var adjustBackgroundPlayback = function () {
    if (redQueen_alice.playbackRate < .8) {
      sceneries.forEach(function (anim) {
        anim.playbackRate = redQueen_alice.playbackRate / 2 * -1;
      });
    } else if (redQueen_alice.playbackRate > 1.2) {
      sceneries.forEach(function (anim) {
        anim.playbackRate = redQueen_alice.playbackRate / 2;
      });
    } else {
      sceneries.forEach(function (anim) {
        anim.playbackRate = 0;
      });
    }
  }
  adjustBackgroundPlayback();

  setInterval( function() {
    if (redQueen_alice.playbackRate > .4) {
      redQueen_alice.playbackRate *= .9;    
    } 
    adjustBackgroundPlayback();
  }, 3000);
  
  var goFaster = function() {
    redQueen_alice.playbackRate *= 1.1;
    adjustBackgroundPlayback();
  }
  
  document.addEventListener("click", goFaster);
  document.addEventListener("touchstart", goFaster);
})
  return (
    <div>
      <div className="sky"></div>
      <div className="earth">
      <div id="red-queen_and_alice">
        <img ref={aliceandqueen} id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
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
