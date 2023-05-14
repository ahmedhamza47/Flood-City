import React, { useState } from "react";

import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  const [selectedRiver, setSelectedRiver] = useState(1);
  return (
    <div className="MainDash">
      <h1 className="mb-5">Dashboard</h1>

      <Table />

      <div className="row">
        <div className="col-md-6">
          <label htmlFor="riverName">River Name:</label> <br />
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectedRiver}
            onChange={(e) => setSelectedRiver(e.target.value)}
          >
            <option selected>Select River</option>
            <option value="1">Sinja</option>
            <option value="2">Humla Karnali</option>
            <option value="3">Chisapani</option>
            <option value="4">Sano Bheri</option>
            <option value="5">Dipayal</option>
          </select>
        </div>
      </div>
      <br />
      <br />
      <form>
        {selectedRiver && (
          <div>
            <label htmlFor="id">
              ID:
              <input type="text" id="id" />
            </label>
            <label htmlFor="lat">
              Latitude
              <input type="text" id-="lat" />
            </label>
            <label htmlFor="lng">
              Longitude
              <input type="text" />
            </label>
            <label htmlFor="basin">
              Basin
              <input type="text" id="basin" />
            </label>
            <label htmlFor="dangerLevel">
              Danger Level
              <input type="text" id="dangerLevel" />
            </label>
            <label htmlFor="warningLevel">
              Warning Level
              <input type="text" id="warningLevel" />
            </label>
            <label htmlFor="value">
              Value
              <input type="text" id="value" />
            </label>
          </div>
        )}
      </form>
    </div>
  );
};

export default MainDash;
