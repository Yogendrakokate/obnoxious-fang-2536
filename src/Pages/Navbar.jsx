import "../Styles/Navbar.css";
export default function Navbar() {
  return (
    <div>
      <div>
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
          <div style={{ width: "35%", height: "100%" }}>
            <img
              style={{ marginTop: "27px", marginLeft: "50px" }}
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
            <div className="navcolor">Demo</div>
            <div className="navcolor">Features</div>
            <div className="navcolor">Pricing</div>
            <div className="navcolor">About us</div>
            <div className="navcolor">FAQ</div>
            <div className="navcolor">Blog</div>
            <div>
              <button
                style={{
                  width: "70px",
                  height: "35px",

                  border: "1px solid gray",

                  color: "#676e74",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                LOGIN
              </button>
            </div>
            <div>
              <button
                style={{
                  width: "77px",
                  height: "37px",

                  border: "1px solid gray",
                  backgroundColor: "#4ea819",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                SIGN UP
              </button>
            </div>
            <div>EN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
