import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../header/Header1.css";

function Header() {
  const [click, setClick] = useState(false);
 
  const handleClick = () => setClick(!click);

  // const logoutWithRedirect = () =>
  // logout({
  //     logoutParams: {
  //       returnTo: window.location.origin,
  //     }
  // });
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
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-1 d-flex ">
            <div>
              <p className="sa fw-medium">J</p>
            </div>
            <div>
              <p className="far fw-bolder">ourney</p>
            </div>
          </div>

          {/* <div><ion-icon name="contrast-outline" onClick={()=> changeTheme()}></ion-icon></div> */}

          <div className="navlinks">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/home" ClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/destinations" activeClassName="active">
                  Destinations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/places" activeClassName="active">
                  Places
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/packages" activeClassName="active">
                  Packages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" activeClassName="active">
                  Login
                </NavLink>
              </li>

              {/* {isAuthenticated ? (
                <li className="nav-item">
                  <NavLink
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink onClick={() => loginWithRedirect()}>Login</NavLink>
                </li>
              )}
{console.log("LOGIN",user)} */}
{/* {console.log("LOGIN",isAuthenticated)}
<li className="nav-item">
                  <NavLink
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Logout
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={() => loginWithRedirect()}>Login</NavLink>
                </li> */}

            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
