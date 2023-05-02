import { React, useEffect, useState } from "react";
import "../login/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate()
	const [val, setVal] = useState();
  const [log, setLog] = useState([]);
  const [err, setErr] = useState();

  const getApi = () => {
    axios.get("http://localhost:3004/users").then((result) => {
      setLog(result.data);
    });
  };
  useEffect(() => {
    getApi();
  }, []);

  const handleLog = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
	  const isLoggedIn =  log?.find((item)=>item.username===val.logemail && item.pass===val.logpass );
	  if(isLoggedIn) {
		console.log("opopop11",isLoggedIn)
		navigate("/admin")
	}  else setErr("Wrong user name or password")

    // axios.post("http://localhost:3004/users", val).then((result) => {
    //   console.log("oggy", result);
    // });
  };
  const handleSignup = () => {
  	axios.post("http://localhost:3004/users", val).then((result) => {
  	  console.log("oggy",result);
  	});
    };
  return (
    <>
      <div class="section form77">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3">
                  <p>
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </p>
                </h6>

                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <p>
                            <h4 class="mb-4 pb-3">Log In</h4>
                          </p>
                          <div class="form-group">
                            <input
                              type="email"
                              name="logemail"
                              class="form-style"
                              placeholder="Username"
                              id="logemail"
                              autocomplete="off"
							  onChange={(e)=>handleLog(e)}
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
							  onChange={(e)=>handleLog(e)}
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
						  <div>{err}</div>
                          {/* <input
                            className="btn mt-4"
                            type="submit"
                            onClick={handleSubmit}
                          /> */}
                          <button
                            className="btn mt-4"
                            type="button"
                            onClick={handleSubmit}
                          >Submit</button>

                          <p class="mb-0 mt-4 text-center">
                            <a href="#0" class="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <p>
                            <h4 class="mb-4 pb-3">Sign Up</h4>
                          </p>
                          <div class="form-group">
                            <input
                              type="text"
                              name="logname"
                              class="form-style"
                              placeholder="Username"
                              id="logname"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button
                            className="btn mt-4"
                            type="button"
                          >Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
