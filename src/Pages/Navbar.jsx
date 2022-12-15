import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="stick">
        <div
          style={{ width: "100%", height: "4px", backgroundColor: "#4ea819" }}
        ></div>
        <div
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            width: "100%",
            height: "90px",
            display: "flex",
            gap: "50px",
          }}
        >
          <div
            onClick={() => navigate("/")}
            style={{ width: "35%", height: "100%" }}
          >
            <img
              style={{
                marginTop: "27px",
                marginLeft: "50px",
                cursor: "pointer",
              }}
              src="https://desktime.com/static/logo/logo-dark-without-padding.svg"
              alt=""
            />
          </div>
          <div
            className="nav"
            style={{
              width: "50%",
              height: "100%",

              display: "flex",
            }}
          >
            <div
              onClick={() => navigate("/demo")}
              style={{ cursor: "pointer" }}
              className="navcolor"
            >
              Demo
            </div>
            <div
              onClick={() => navigate("/features")}
              style={{ cursor: "pointer" }}
              className="navcolor"
            >
              Features
            </div>
            <div
              onClick={() => navigate("/pricing")}
              style={{ cursor: "pointer" }}
              className="navcolor"
            >
              Pricing
            </div>
            <div
              onClick={() => navigate("/about")}
              style={{ cursor: "pointer" }}
              className="navcolor"
            >
              About us
            </div>
            <div
              onClick={() => navigate("/faq")}
              style={{ cursor: "pointer" }}
              className="navcolor"
            >
              FAQ
            </div>
            <div
              onClick={() => navigate("/blog")}
              style={{ cursor: "pointer" }}
              className="navcolor"
            >
              Blog
            </div>
            <div>
              <button
                onClick={() => navigate("/login")}
                style={{
                  width: "70px",
                  height: "35px",

                  border: "1px solid gray",

                  color: "#676e74",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                LOGIN
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/Signup")}
                style={{
                  width: "77px",
                  height: "37px",

                  border: "1px solid gray",
                  backgroundColor: "#4ea819",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                SIGN UP
              </button>
            </div>
            <div>
              <select
                style={{
                  width: "45px",
                  height: "30px",
                  border: "none",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <option value="EN">EN</option>

                <option value="Espanol">Espanol</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
