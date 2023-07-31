import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
        alt="spotify-logo"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">Log-In</div>
      </a>
    </div>
  );
}
