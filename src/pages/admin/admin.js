import { React, useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

const Admin = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const getApi = () => {
    axios.get("http://localhost:3004/booking").then((result) => {
      setData(result.data);
    });
  };
  const getApi2 = () => {
    axios.get( "http://localhost:3004/users").then((result1) => {
      setUser(result1.data);
      console.log("lololo", result1.data)
    });
  };

  useEffect(() => {
    getApi();
    getApi2();
  }, []);

  const removeId = async (id) => {
    await axios.delete(`http://localhost:3004/booking/${id}`);
    getApi();
  };
  return (
    <>
      <div className="px-3 background-color">
        <div className="container-fluid">
          <div className="row g-3 py-5">
            <div className="col-md p-3">
              <div className="p-3 bg-white shadow-sm  d-flex justify-content-around align-item-center rounded ">
                <div>
                  <h3 className="fs-2 pt-3">450</h3>
                  <p className="fs-2">Visitor</p>
                </div>
                <i class="bi bi-people p-3 fs-1"></i>
              </div>
            </div>

            <div className="col-md p-3">
              <div className="p-3 bg-white shadow-sm  d-flex justify-content-around align-item-center rounded ">
                <div>
                  <h3 className="fs-2 mt-3">{Object.keys(user).length}</h3>
                  <p className="fs-2">Users</p>
                </div>
                <i class="bi bi-person p-3 fs-1"></i>
              </div>
            </div>

            <div className="col-md p-3">
              <div className="p-3 bg-white shadow-sm  d-flex justify-content-around align-item-center rounded ">
                <div>
                  <h3 className="fs-2 mt-3">{Object.keys(data).length}</h3>
                  <p className="fs-2">Tickets booked</p>
                </div>
                <i className="bi bi-bookmark p-3 fs-1"></i>
              </div>
            </div>

            <table class="table caption-top bg-white rounded">
              {/* <caption className='text-white fs-2'> Recent data</caption> */}
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Date</th>
                  <th scope="col">Package</th>
                  <th scope="col">Presons</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <>
                    <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.Name}</td>
                      <td>+91 {user.Phone}</td>
                      <td>{user.Date}</td>
                      <td>{user.Package}</td>
                      <td>{Number(user.Kids )+ Number(user.Adults) + Number(user.Seniors)}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger dlt-btn"
                          onClick={() => removeId(user.id)}
                        >
                          <ion-icon name="close"></ion-icon>
                        </button>
                      </td>
                    </tr>
                  </>
                ))}

                {/* <tr>
      <th scope="row">1</th>
      <td>kimi</td>
      <td>998988345</td>
      <td>2/5/23</td>
      <td>kedarnath</td>
      <td>3</td>
    </tr>

    <tr>
      <th scope="row">1</th>
      <td>Mayur</td>
      <td>56563423</td>
      <td>6/5/23</td>
      <td>nalsarover</td>
      <td>4</td>
    </tr>
     */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
