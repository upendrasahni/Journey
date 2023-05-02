import { React, useState, useEffect } from "react";
import axios from "axios";
import PackagesData from "../../Packages.json";
import "../booking/booking.css";

const Booking = () => {
  const [val, setVal] = useState();
  const [data, setData] = useState([]);

  const [regionid, setRegionid] = useState("");
  const [placeid, setPlaceid] = useState("");
  const [place, setPlace] = useState([]);

  const getApi = () => {
    axios.get("http://localhost:3004/packages").then((result) => {
      setData(result.data);
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  const mailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneregex = /^[1-9][0-9]{8}$/;
  const currentDate = new Date().toISOString().split("T")[0];
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mailerror, setMailerror] = useState("");
  const [phoneerror, setPhoneerror] = useState("");
  const validEmail = mailregex.test(email);
  const validPhone = phoneregex.test(phone);

  const checkEmail = (e) => {
    setEmail(e.target.value);

    if (validEmail === false) {
      setMailerror("Please, Enter Valid Email");
    } else {
      setMailerror(" ");
      return true;
    }
  };
  const checkPhone = (e) => {
    setPhone(e.target.value);

    if (validPhone === false) {
      setPhoneerror("Please, Enter Valid Phone");
    } else {
      setPhoneerror(" ");
      return true;
    }
  };

  const handleReg = (e) => {
    const getregId = e.target.value;
    const getPlacedata = PackagesData.find(
      (region) => region.pack_id == getregId
    )?.places;
    setPlace(getPlacedata);
    setRegionid(getregId);
  };

  const handlePack = (e) => {
    const packId = e.target.value;
    setPlaceid(packId);
  };

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const pop = (e) => {
    if (validEmail === true && validPhone === true) {
      handleSubmit();
    } else {
      alert("Please Fill Valid Details");
      e.preventDefault();
    }
  };
  const handleSubmit = () => {
    axios.post("http://localhost:3004/booking", val).then((result) => {
      console.log("oggy", result);
    });
  };

  return (
    <div className="background-color">
      <form className="py-5 border-top border-dark" onSubmit={pop}>
        <div className="card shadow  bg-white  rounded-5">
          <div className="card-body rounded-3 ">
            <p className="card-title text-center shadow mt-5 rounded-2">
              Travel Booking Form
            </p>

            <div className="icons text-center">
              <i className="fa fa-bus fa-2x faa" aria-hidden="true"></i>
              <i className="fa fa-campground fa-2x faa" aria-hidden="true"></i>
              <i className="fa fa-utensils fa-2x faa" aria-hidden="true"></i>
              <i
                className="fa fa-person-hiking fa-2x faa"
                aria-hidden="true"
              ></i>
            </div>
            <hr />

            <div className="row pt-2">
              <div className="col-sm-6">
                <input
                  placeholder="Name"
                  type="text"
                  id="date-picker-example"
                  className="form-control "
                  name="Name"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="col-sm-6">
                <input
                  placeholder="E-mail"
                  type="text"
                  id="date-picker-example"
                  className="form-control"
                  name="Mail"
                  onChange={(e) => {
                    handleChange(e);
                    checkEmail(e);
                  }}
                  required
                />
                <p className="text-danger">{mailerror}</p>
              </div>
            </div>

            <div className="row pt-4">
              <div className="col-sm-6">
                <input
                  placeholder="Phone Number"
                  type=""
                  id="date-picker-example"
                  className="form-control pb-2"
                  name="Phone"
                  onChange={(e) => {
                    handleChange(e);
                    checkPhone(e);
                  }}
                  required
                />
                <p className="text-danger">{phoneerror}</p>
              </div>

              <div className="col-sm-6">
                <input
                  placeholder="&#xf073; Arriving"
                  type="date"
                  id="date-picker-example"
                  min={currentDate}
                  className="form-control datepicker"
                  name="Date"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>

            <div className="row pt-4">
              <div className="col-sm-6">
                <select
                  className="browser-default custom-select pb-p"
                  id="select"
                  name="Region"
                  onChange={(e) => {
                    handleChange(e);
                    handleReg(e);
                  }}
                  required
                >
                  <option disabled="" selected="">
                    Select Region
                  </option>
                  {PackagesData.map((option, index) => (
                    <option key={index} value={option.pack_id}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-sm-6">
                <select
                  className="browser-default custom-select mb-4"
                  id="select"
                  name="Package"
                  onChange={(e) => {
                    handleChange(e);
                    handlePack(e);
                  }}
                  required
                >
                  <option value="" disabled="" selected="">
                    Packages
                  </option>
                  {place.map((pl, index) => (
                    <option value={pl.place} key={index}>
                      {pl.place}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-4">
                <select
                  className="browser-default custom-select mb-4"
                  id="select"
                  name="Kids"
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option value="" disabled="" selected="">
                    Kids(0-14)
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="col-sm-4">
                <select
                  className="browser-default custom-select mb-4"
                  id="select"
                  name="Adults"
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option value="" disabled="" selected="">
                    Adults(15-64)
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="col-sm-4">
                <select
                  className="browser-default custom-select mb-4"
                  id="select"
                  name="Seniors"
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option value="" disabled="" selected="">
                    Seniors(65+)
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="col-sm-2">
              <p>{}</p>
            </div>
            <input className="btn float-left " id="book-btn" type="reset" />
            <button
              className="btn float-right"
              id="book-btn"
              type="submit"
              value="Book"
            >
              Submit
            </button>

            {/* <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
