import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import win from "../images/balcony.png";
import back from "../images/backbtn.png";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = (decode) => {
    navigate("/", {
      state: decode,
    });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="prime">
      <img
        onClick={handleClick}
        src={back}
        alt=""
        style={{
          position: "absolute",
          top: "4%",
          left: "2%",
          height: "8%",
          transform: "rotate(180deg)",
          cursor: "pointer",
        }}
      />
      <div style={{ display: "flex", position: "relative" }}>
        <div style={{ width: "600px", alignItems: "center", height: "75vh" }}>
          <img
            style={{
              width: "800px",
              zIndex: "1",
              position: "absolute",
              left: "1%",
            }}
            src={win}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            border: "4px solid #4a3a3d",
            borderRadius: "20px",
            flexDirection: "column",
            width: "65vh",
            height: "65vh",
            padding: "25px",
            paddingLeft: "15vh",
            marginRight: "13vh",
          }}
          className="container"
        >
          <h1>Welcome Back</h1>
          <p>Login to continue with us</p>
          <br />
          <p>Username:</p>
          <input type="text" className="" />
          <br />
          <p>Password:</p>
          <input type="text" className="" />
          <br />
          <button style={{ width: "40vh" }}>Login</button>
          <br />
          <div
            style={{ textAlign: "center", width: "85%", fontWeight: "Bold" }}
          >
            <p>
              <b>
                Not an already registered user?{" "}
                <u style={{ cursor: "pointer" }} onClick={handleSignup}>
                  Sign Up
                </u>
              </b>
            </p>
            <br />
            <p>or</p>

            <br />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "85%",
              fontWeight: "Bold",
            }}
          >
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                handleClick(decoded);
              }}
              onError={(error) => console.log(error)}
              size="large"
            />
          </div>
          {/* <button style={{ width: "40vh" }} onClick={() => handleLogin()}>
            Continue with Google
          </button> */}
          ;
          <br />
          <button style={{ width: "40vh" }}>Continue with LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
