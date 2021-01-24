import useWebAnimations from '@wellyshen/use-web-animations';
import React from 'react';


export const Foreground1 = () => {


const sceneryFrames =   [
  { transform: 'translateX(100%)' },
  { transform: 'translateX(-100%)' }   
];


const sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity
};

const foreground1 = useWebAnimations({
  keyframes: sceneryFrames,
  timing: sceneryTimingForeground,
})
    return (
        <div>
      <div className="scenery" id="foreground1" ref={foreground1.ref}>
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>
    </div>
    )
}
