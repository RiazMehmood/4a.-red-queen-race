import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";



export const Foreground2 = () => {

const sceneryFrames = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
];

const sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity
};

const foreground2 = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
})
    return (
        <div>

            <div className="scenery" id="foreground2" ref={foreground2.ref}>
                <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
                <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
            </div>
        </div>
    )
}