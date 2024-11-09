import React, { useEffect, useState } from "react";
import "./userListPage.css";
import { MdOutlineEdit } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserListPage() {
  const [userData, SetUserData] = useState([]);
  const navigate = useNavigate();
  const getUserData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response?.status === 200) {
        SetUserData(response.data);
      }
    } catch (error) {
      console.error("error");
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  console.log("data", userData.name);
  console.log(userData);
  return (
    <div>
      <div className="userListPage_main">
        <div className="userListPage_heading">
          <h1>User List</h1>
          <div className="userListPage_box ">
            {userData.map((e) => {
              return (
                <div className="userListPage_card">
                  <div className="userListPage_cardUserName my-0">
                    <h3>{e?.name}</h3>
                  </div>
                  <div className="userListPage_cardUserEmail">
                    <p>{e?.email} </p>
                  </div>
                  <div className="userListPage_cardUserContact">
                    <p>{e?.phone} </p>
                  </div>
                  <div className="userListPage_cardUserEdit">
                    <button
                      className="userListPage_cardUserEditBtn"
                      onClick={() => {
                        navigate(`/userDetailPage/${e.id}`);
                      }}
                    >
                      <MdOutlineEdit />
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserListPage;
