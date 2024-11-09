import React, { useEffect, useState } from "react";
import "./userDetailPage.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function UserDetailPage() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  const navigate=useNavigate()
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (response.status === 200) {
        setUserData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted!");
  };
  return (
    <div className="userDetailPage_main ">
      <div className="userDetailPage_heading">
        <h2>User Detail</h2>
      </div>
      <div className="userDetailPage_box">
        <div className="userDetailPage_form_container">
          <IoChevronBackCircleOutline style={{ fontSize: "25px" }} onClick={()=>{
            navigate(-1)
          }}/>
          <h2>
            <span style={{ color: "#818286", fontWeight: "500" }}> ID: # </span>{" "}
            {userData?.id}
          </h2>
          <h3>{userData?.name} </h3>
          <form onSubmit={handleSubmit}>
            <div className="userDetailPage_form_group row">
              <label>Name</label>
              <div className="col-6">
                <input
                  type="text"
                  name="name"
                  value={userData?.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData?.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h4>Address</h4>
            <div className="userDetailPage_form_group row">
              <label>Street</label>
              <div className="col-6">
                <input
                  type="text"
                  name="street"
                  value={userData?.address?.street}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label>Suite</label>
                <input
                  type="text"
                  name="suite"
                  value={userData?.address?.suite}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="userDetailPage_form_group row">
              <label>City</label>
              <div className="col-6">
                <input
                  type="text"
                  name="city"
                  value={userData?.address?.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label>Zip Code</label>

                <input
                  type="text"
                  name="zipcode"
                  value={userData?.address?.zipcode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="userDetailPage_form_group row">
              <label>Phone Number</label>
              <div className="col-6">
                <input
                  type="text"
                  name="phone"
                  value={userData?.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  value={userData?.website}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h4>Company</h4>
            <div className="userDetailPage_form_group row">
              <label>Name</label>
              <div className="col-6">
                <input
                  type="text"
                  name="companyName"
                  value={userData?.company?.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label>Catch Phrase</label>
                <input
                  type="text"
                  name="catchPhrase"
                  value={userData?.company?.catchPhrase}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="userDetailPage_btn">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDetailPage;
