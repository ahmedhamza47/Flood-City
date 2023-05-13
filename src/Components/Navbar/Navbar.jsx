/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { fetchUser, postUser } from "../API/API";
import { DataContext } from "../context/context";
import { v4 as uuidv4 } from "uuid";
function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { handleArrowClick } = useContext(DataContext);

  // console.log(user);
  const [toggleColor, setToggleColor] = useState(false);
  const location = useLocation();
  const currentUrl = location.pathname;
  //console.log(uuidv4())
  // const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (req) => postUser(req),
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
  //console.log(uuidv4())
  useEffect(() => {
    getToggleColor();
  }, [currentUrl]);
  const getUserData = async () => {
    const data = await fetchUser();
    console.log("data", data.length);
    if (data.length === 0) {
      mutate({
        id: uuidv4(),
        name: user.name,
        email: user.email,
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
        phone_no: 9841716938,
      });
    }
    let emailFound = false;
    data.forEach((individualUser) => {
      if (individualUser?.email === user?.email) {
        emailFound = true;
      }
    });
    if (!emailFound) {
      mutate({
        id: uuidv4(),
        name: user.name,
        email: user.email,
        latitude: 27.232,
        longitude: 28.22,
        phone_no: 9841716938,
      });
    }
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
    <div className="d-flex flex-row align-items-center">
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
              <Link to={"/"} className="links">
                <li className="nav-item ">
                  <div className="nav-link active">
                    Home <span className="sr-only">(current)</span>
                  </div>
                </li>
              </Link>
              <Link to={"/watch/"} className="links">
                <li className="nav-item ">
                  <div className="nav-link inactive">
                    River Watch <span className="sr-only">(current)</span>
                  </div>
                </li>
              </Link>
              <Link to={"/prediction/"} className="links">
                <li className="nav-item ">
                  <div className="nav-link inactive">
                    Future Prediction <span className="sr-only">(current)</span>
                  </div>
                </li>
              </Link>
              <Link to={"/analysis/"} className="links">
                <li className="nav-item  ">
                  <div className="nav-link inactive">
                    Analysis<span className="sr-only">(current)</span>
                  </div>
                </li>
              </Link>

              <li className="nav-item ">
                <div className="nav-link inactive" onClick={handleArrowClick}>
                  Contact <span className="sr-only">(current)</span>
                </div>
              </li>

              {/* user login and logout */}

              {isAuthenticated && (
                <li className="nav-item right  user-dropdown dropdown ">
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
                      alt="user"
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
