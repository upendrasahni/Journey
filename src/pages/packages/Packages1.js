import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../packages/Packages.css";
import bannerpack from "../../assets/packages_images/packages banner.jpg";

const Packages = () => {
  const [data, setData] = useState([]);
  const getApi = () => {
    axios.get("http://localhost:3004/packages").then((result) => {
      console.log("console_data", result);
      setData(result.data);
    });
  };
  const IMG = (imgName) => {
    return require(`../../assets/packages_images/${imgName}`);
  };

  useEffect(() => {
    getApi();
    console.log("Packages");
  }, []);

  return (
    <div className="background-color">
      <div>
        <div className="banner">
          <div className="pack-banner">
            <img src={bannerpack} alt="" />
          </div>

          <div className="abc1">
            <p className="pack-fade">Packages</p>
            <p className="pack-fade-text">Find Your Trip</p>
          </div>
        </div>
      </div>

      <div className="wholee">
        {data.map((item) => {
          return (
            <div className="boss">
              <div className="rol">
                <article className="tx">
                  <p>{item.title}:</p>
                </article>
                <div className="pack_imag">
                  {item?.places.map((el, i) => {
                    return (
                      <>
                        <a
                          href=""
                          data-bs-target={`#${el.place}`}
                          data-bs-toggle="modal"
                        >
                          <img className="imag" src={IMG(el.img)} alt="" />
                        </a>
                        <div className="modal fade" id={el.place} tabIndex="-1">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <div>
                                  <h1 className="modal-title fs-1">
                                    {el.place}
                                  </h1>
                                  <a href="https://goo.gl/maps/FwS7zCe71dY9zYeWA">
                                    📍{el.location}
                                  </a>
                                </div>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="fl">
                                  <div className="ft">
                                    <p className="fs-6">⭐⭐⭐⭐⭐</p>
                                  </div>
                                  <hr />
                                  <article>
                                    <p>{el.description}</p>
                                  </article>
                                  <hr />
                                  <div className="fo">
                                    <p className="fs-5">
                                      <strong>{el.duration}</strong>
                                    </p>
                                    <p className="fs-5">
                                      <strong>₹ {el.price}/-</strong>
                                    </p>
                                  </div>
                                  <hr />
                                </div>
                              </div>
                              <div className="modal-foote  d-flex justify-content-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  data-bs-target="#appoint"
                                  data-bs-dismiss="modal"
                                >
                                  <Link className="booking_link" to="/booking">
                                    Book
                                  </Link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Packages;
