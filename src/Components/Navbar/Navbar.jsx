/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUser, postUser } from "../API/API";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  // console.log(user);
  const [toggleColor, setToggleColor] = useState(false);
  const location = useLocation();
  const currentUrl = location.pathname;
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });

  const getToggleColor = () => {
    if (currentUrl == "/analysis/") {
      setToggleColor(true);
    } else {
      setToggleColor(false);
    }
  };
  useEffect(() => {
    getToggleColor();
  }, [currentUrl]);
  const getUserData = async () => {
    const data = await fetchUser();
    // console.log("data", data);
    data.forEach((individualUser) => {
      if (individualUser?.email !== user?.email) {
        mutate({
          id: 1,
          name: user.name,
          email: user.email,
          latitude: 27.232,
          longitude: 28.22,
          phone_no: 9841716938,
        });
      }
    });
  };
  useEffect(() => {
    getUserData();
  }, [user]);
  const handleLogin = async () => {
    //   console.log("hello");
    try {
      await loginWithRedirect();
      // console.log(test, "test");
    } catch (e) {
      console.log(e);
    }
  };
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };
  return (
    <div>
      <nav
        className="navbar  navbar-expand-lg  navbar-light  pt-3"
        style={{
          backgroundColor: toggleColor
            ? "rgba(30, 52, 75, 0.83)"
            : "transparent",
        }}
      >
        <div className="container">
          <a className="navbar-brand lobster" href="index.html">
            FloodWarn
          </a>
          <button
            className="navbar-toggler ml-auto custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-auto">
              <Link to={"/"}>
                <li className="nav-item ">
                  <div className="nav-link active">
                    Home <span className="sr-only">(current)</span>
                  </div>
                </li>
              </Link>
              <Link to={"/watch/"}>
                <li className="nav-item ">
                  <div className="nav-link inactive">
                    River Watch <span className="sr-only">(current)</span>
                  </div>
                </li>
              </Link>
              <Link to={"/prediction/"}>
                <li className="nav-item ">
                  <div className="nav-link inactive">
                    Future Prediction <span className="sr-only">(current)</span>
                  </div>
                </li>
              </Link>
              <Link to={"/analysis/"}>
                <li className="nav-item  ">
                  <a className="nav-link inactive" href="/">
                    Analysis<span className="sr-only">(current)</span>
                  </a>
                </li>
              </Link>

              <li className="nav-item ">
                <a className="nav-link inactive" href="/">
                  Contact <span className="sr-only">(current)</span>
                </a>
              </li>

              {/* user login and logout */}

              {isAuthenticated && (
                <li className="nav-item right  user-dropdown dropdown mt-1">
                  <div
                    className=" inactive dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={user.picture}
                      alt={user.name}
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      className="user-image"
                    />
                  </div>
                  <div
                    className="dropdown-menu user-dropdown-menu justify-content-center text-center"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="dropdown-item">{user.name}</div>

                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item">
                      <button
                        type="button"
                        className="btn btn-outline-primary  mt-2"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </li>
              )}
              {!isAuthenticated && (
                <li className="nav-item user-dropdown my-auto ">
                  <button
                    className="btn btn-outline-primary btn-login mt-1 "
                    onClick={() => handleLogin()}
                  >
                    {" "}
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
