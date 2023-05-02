import React from "react";
import "./Contact.css";
import bannerco from "../../assets/contact-banner.jpg";

const Contact = () => {
  return (
    <>
      <div class="contact-banner">
        <img src={bannerco} />
      </div>

      <div class="abcd">
        <p class="contact-fade">Contact</p>
        <p class="contact-banner-text">Connect With Us</p>
      </div>

      <div class="row ola">
        <div class="col-sm-1 col-1">
          <div class="card1 d-flexl- justify-content-center">
            <p><h1>Contact Info</h1></p>

            <div class="info11">
              <div>
                <p>
                  <ion-icon name="location-sharp"></ion-icon> Ahmedabad
                </p>
              </div>

              <div>
                <p>
                  <ion-icon name="mail"></ion-icon> journey@info.com
                </p>
              </div>

              <div>
                <p>
                  <ion-icon name="call"></ion-icon> +91-1234567890
                </p>
              </div>
            </div>
            <div class="d-flex gap-3 mk">
              <a href="https://twitter.com">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="https://www.facebook.com">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://www.instagram.com">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="https://in.pinterest.com/">
                <i class="bi bi-pinterest kk"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-8 col-9">
          <div class="card2 d-flex justify-content-center">
            <div class="t1 d-flex">
              <h1 class="mt-0 d-flex justify-content-center">Send a Message</h1>
            </div>

            <div class="form55">
              <form>
                <div class="d-flex gap-5 w-100 py-sm-3">
                  <div>
                    <label for="fname"><p>First name:</p></label>
                    <br />
                    <input type="text" id="fname" name="fname" class="effect" />
                    <br />
                  </div>
                  <div>
                    <label for="lname"><p>Last name:</p></label> <br />
                    <input type="text" id="lname" name="lname" class="effect" />
                    <br />
                  </div>
                </div>

                <div class="d-flex gap-5 w-100 py-sm-3 py-2 ">
                  <div>
                    <label for="fname"><p>Email id:</p></label>
                    <br />
                    <input
                      type="email"
                      id="ename"
                      name="ename"
                      class="effect"
                    />
                    <br />
                  </div>
                  <div>
                    <label for="fname"><p>Phone no.:</p></label>
                    <br />
                    <input
                      type="number"
                      id="pname"
                      name="pname"
                      class="effect"
                    />
                    <br />
                  </div>
                </div>
                <div>
                  <label for="lname"><p>Write something here...</p></label>
                  <br />
                  <textarea
                    name=""
                    id=""
                    cols="55"
                    rows="2"
                    class="effect"
                  ></textarea>
                </div>
                <br />
                <br />
                <div class="sub d-flex justify-content-center">
                  <button type="submit">
                    <p>Submit</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
