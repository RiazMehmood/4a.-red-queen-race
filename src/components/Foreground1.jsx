// import useWebAnimations from '@wellyshen/use-web-animations';
import React from 'react';


export const Foreground1 = (props) => {

const foreground1 = props.foreground1;


    return (
        <div>
      <div className="scenery" id="foreground1" ref={foreground1}>
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>
    </div>
    )
}
