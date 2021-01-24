import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";


export const Background1 = () => {

    // const sceneryTimingForeground = {
    //     duration: 12000,
    //     iterations: Infinity
    // };
    
const sceneryFrames = [
  { transform: 'translateX(100%)' },
  { transform: 'translateX(-100%)' }
];

const sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity
};

const background1 = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground
})
    return (
        <div>
            <div className="scenery" id="background1" ref={background1.ref}>
                <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
                <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
                <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
            </div>
        </div>
    )
}
