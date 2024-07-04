import React from 'react';
import logo from '../assets/kakaoLogin.png';
import '../css/Kakao.css';

const Kakao = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  const KakaoLogin = () => {
    window.location.href = link;
  };

  return (
    <div>
      <img
        src={logo}
        alt="KaKaoLogin"
        className="kakao-login"
        onClick={KakaoLogin}
      />
    </div>
  );
};

export default Kakao;
