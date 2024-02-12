import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import window from "../images/balcony.png";
import back from "../images/backbtn.png";
function Signup() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="prime">
      <img onClick={handleClick} src={back} alt="" style={{position:"absolute", top:"4%",left:"2%", height:"8%", transform: "rotate(180deg)", cursor:"pointer"}}/>
      <div style={{display:"flex", position: "relative"}}>
        <div style={{width:"600px",alignItems:"center",  height: "75vh"}}>
          <img style={{ width: "800px", zIndex: "1", position: "absolute", left: "1%"}} src={window} alt="" />
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
          }} className="container"
        >
          <h1>Welcome to NewHome</h1>
          <h3>Start your journey with us</h3>
          <br />
          <p>Username:</p>
          <input type="text" className="" />
          <br />
          <p>Password:</p>
          <input type="text" className="" />
          <br />
          <button style={{ width: "40vh" }}>Sign Up</button>
          <br />
          <div style={{textAlign:"center", width:"85%", fontWeight:"Bold"}}>
            <p><b>Already a registered user? <u style={{cursor:"pointer"}} onClick={handleLogin}>Log In</u></b></p>
            <br />
            <p>or</p>

            <br />

          </div>
          <button style={{ width: "40vh" }}>Continue with Google</button>
          <br />
          <button style={{ width: "40vh" }}>Continue with LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
