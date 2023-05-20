import React, { useState } from "react";
import "./Accuracy.css";
const Accuracy = () => {
  const [selectedRiver, setSelectedRiver] = useState(1);
  return (
    
      <div className="main">
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
        <form>
          {selectedRiver && (
            <div>
              <div className="form-group">
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" />
              </div>
              <div className="form-group">
                <label htmlFor="lat">Latitude:</label>
                <input type="text" id="lat" />
              </div>
              <div className="form-group">
                <label htmlFor="lng">Longitude:</label>
                <input type="text" id="lng" />
              </div>
              <div className="form-group">
                <label htmlFor="basin">Basin:</label>
                <input type="text" id="basin" />
              </div>
              <div className="form-group">
                <label htmlFor="dangerLevel">Danger Level:</label>
                <input type="text" id="dangerLevel" />
              </div>
              <div className="form-group">
                <label htmlFor="warningLevel">Warning Level:</label>
                <input type="text" id="warningLevel" />
              </div>
              <div className="form-group">
                <label htmlFor="value">Value:</label>
                <input type="text" id="value" />
              </div>
            </div>
          )}
        </form>
      </div>
  );
};

export default Accuracy;
