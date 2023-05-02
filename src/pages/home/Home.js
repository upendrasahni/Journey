import {React, useEffect,useState }from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import binoculars from "../../assets/binoculars.png";
import map_marker from "../../assets/map-marker.png";
import tickets from "../../assets/tickets.png";

const Home = (props) => {

    // const [theme, setTheme] = useState("light-mode");

    // const changeTheme = () => {
    //  if(theme === "dark-mode"){
    //   setTheme("light-mode");
    //  } else{
    //   setTheme("dark-mode");
    //  }
    // };

    // useEffect(()=> {
    //   document.body.className = theme;
    // }, [theme])


  return (
    <div className="background-color">
      {console.log(props)}

      {/* =====Main Section===== */}
      <div className="intro">
        <div className="intro-header">

          {/* =====Main Text===== */}
          <div>
            <p className="flex-shrink-1 saf-1">YOUR JOURNEY STARTS HERE...</p>
          </div>

          <div className="pt-5 ">
            
            {/* =====Explore Button===== */}
            <div className="explore ">
              <div className="explore-btn rounded-5 ">
                <ion-icon name="earth" className="earth px-2"></ion-icon>
                <Link to="/booking">Explore</Link>
                {/* <a onClick={() => changeTheme()}>Explore</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====Services Section===== */}
      <div id="services">
        <div className="services container">
          <div className="bino">
            <img src={binoculars} />
            <p className="fw-bold">Search Your Destination</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a
              quos autem ut itaque ea nemo ab suscipit atque magni, laboriosam
              eveniet dignissimos, dolores cupiditate?
            </p>
          </div>

          <div className="tick">
            <img src={tickets} />
            <p className="fw-bold">Get Your Tickets</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae veritatis tenetur corporis maiores excepturi nobis
              neque, ut repellat et mollitia saepe tempora est similique
              expedita?
            </p>
          </div>

          <div className="map-loc">
            <img src={map_marker} />
            <p className="fw-bold">Travel Around The Country</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at
              similique dicta numquam voluptate, maxime nihil tempora quaerat,
              odio eligendi officia expedita! Praesentium, exercitationem
              impedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
