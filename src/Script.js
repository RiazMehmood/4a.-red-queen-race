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