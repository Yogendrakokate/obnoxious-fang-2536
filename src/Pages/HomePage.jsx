import React from "react";
import "../Styles/HomePage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Freetrial from "../Component/Freetrial";
import Employe from "./EmployeePage";
// const HomePage = () => {
//   return (
//       <>
//           <h1>Homepage</h1>
//          <Employe/>
//       <Link to="/login">
//           <h1>Login</h1>
//       </Link>
//       <Link to="/Signup">
//           <h1>Singup</h1>
//           </Link>
//           <Link to="/AddProject">
//           <h1>Add Project</h1>
//           </Link>
//       </>
     
//   )
// }
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          marginTop: "65px",
          width: "100%",
          height: "350px", 
          display: "flex",
        }}
      >
        <div
          style={{
            width: "40%",

            marginLeft: "230px",
          }}
        >
          <h1>The ultimate all-in-one time tracker for your business</h1>
          <p style={{ width: "80%", marginLeft: "60px" }}>
            A time tracker with additional workforce management features that
            will help you develop a high-performing team that smashes goals
            every time.
          </p>
          <input
            style={{ width: "260px", height: "40px" }}
            type="text"
            placeholder="Your work email"
          />
          <button
            onClick={() => navigate("/Signup")}
            style={{
              width: "180px",
              height: "46px",
              marginLeft: "10px",
              color: "white",
              backgroundColor: "#4ea819",
              border: "none",
            }}
          >
            START FREE TRIAL
          </button>
        </div>
        <div style={{ width: "40%" }}>
          <iframe
            style={{ marginRight: "50px" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sgmDvqlSMF4?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <img src="Home1.jpg" alt="" />
      </div>
      <div style={{ width: "100%" }}>
        <img src="Home2.jpg" alt="" />
      </div>
      <div style={{ width: "100%" }}>
        <img src="Home3.jpg" alt="" />
      </div>
      <div style={{ width: "100%" }}>
        <img src="Home4.jpg" alt="" />
      </div>
      <div style={{ width: "100%" }}>
        <img src="Home5.jpg" alt="" />
      </div>
      <button
        onClick={() => navigate("/features")}
        style={{
          width: "210px",
          height: "50px",
          fontSize: "15px",
          fontWeight: "700",
          marginBottom: "50px",
        }}
      >
        SEE ALL FEATURES
      </button>
      <div style={{ width: "100%" }}>
        <img src="Home6.jpg" alt="" />
      </div>
      <div style={{ width: "100%" }}>
        <img style={{ cursor: "pointer" }} src="Home7.jpg" alt="" />
      </div>
      <div style={{ width: "100%" }}>
        <img src="Home8.jpg" alt="" />
      </div>
      <div style={{ width: "100%" }}>
        <img style={{ cursor: "pointer" }} src="Home9.jpg" alt="" />
      </div>
      <div style={{ width: "100%" }}>
        <img src="Home10.jpg" alt="" />
      </div>
      <div style={{ width: "100%" }}>
        <img style={{ cursor: "pointer" }} src="Home11.jpg" alt="" />
      </div>
      <div>
        <img style={{ cursor: "pointer" }} src="Home12.jpg" alt="" />
      </div>
    </>
  );
};

export default HomePage;
