import './App.css';
// import useWebAnimations from "@wellyshen/use-web-animations";
import { RedQueen } from './components/RedQueen';
import { Foreground1 } from './components/Foreground1';
import { Foreground2 } from './components/Foreground2';
import { Background1 } from './components/Background1';
import { Background2 } from './components/Background2';

// const sceneryFrames = [
//   { transform: 'translateX(100%)' },
//   { transform: 'translateX(-100%)' }
// ];

// const sceneryTimingBackground = {
//   duration: 36000,
//   iterations: Infinity
// };

// const sceneryTimingForeground = {
//   duration: 12000,
//   iterations: Infinity
// };


function App() {
  return (
    <div>
      <div className="sky"></div>
      <div className="earth">
        <RedQueen />
      </div>
      <Foreground1 />
      <Foreground2 />
      <Background1 />
      <Background2 />

    </div>
  );
}

export default App;
