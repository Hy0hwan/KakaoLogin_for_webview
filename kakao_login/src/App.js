import React from 'react';
import Kakao from './components/Kakao';
import Lottie from 'react-lottie';
import animationData from '../src/assets/Lottie/loginBackground.json';
import '../src/css/App.css';
function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="app-container">
      <div className="lottie-container">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="login-container">
        <Kakao />
      </div>
    </div>
  );
}

export default App;
