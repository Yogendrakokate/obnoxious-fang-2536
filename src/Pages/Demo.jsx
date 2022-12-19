import "../Styles/Demo.css";
import Navbar from "./Navbar";
export default function Demo() {
  return (
    
    <div>
      <Navbar/>
      <div style={{ width: "100%" }}>
        <div>
          <img src="demo1.jpg" alt="" />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div>
          <img src="demo2.jpg" alt="" />
        </div>
      </div>
      <div className="div1" style={{ width: "100%" }}>
        <div>
          <img src="demo3.jpg" alt="" />
        </div>
        <div style={{ marginTop: "130px", marginLeft: "50px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uFl2-NstWtc?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="div1" style={{ width: "100%" }}>
        <div style={{ marginTop: "130px", marginLeft: "50px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uFl2-NstWtc?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <img src="demo3.jpg" alt="" />
        </div>
      </div>
      <div className="div1" style={{ width: "100%" }}>
        <div>
          <img src="demo3.jpg" alt="" />
        </div>
        <div style={{ marginTop: "130px", marginLeft: "50px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pl3kbM9mC08?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <img src="demo6.jpg" alt="" />
      </div>
    </div>
  );
}
