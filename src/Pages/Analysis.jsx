import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { MdFlood } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import {
  predictedRiverData,
  riverData,
  cardData,
} from "../Datas/AnalysisDatas";
import { DataContext } from "../Components/context/context";
import { fetchPredictedDatas } from "../Components/API/API";
import { SiFlood } from "react-icons/si";
import { RiFloodFill } from "react-icons/ri";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const getOptions = (title) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${title}  `,
      },
    },
  };
  return options;
};
const riverNames = [
  "sinja",
  "humla_karnali",
  "chisapani",
  "sanobheri",
  "dipayal",
];

export function Analysis() {
  const { labels, months, wLevel, setWlevel, fullDate } =
    useContext(DataContext);
  const [selectedRiver, setSelectedRiver] = useState("sinja");
  const historicalRiverData = (riverName) => {
    const data = riverData[riverName];
    if (!data) {
      return null; // or return a default object with an error message or something
    }
    const chartData = {
      labels: months,
      datasets: [
        {
          fill: true,
          label: `Water Level in (m) `,
          data: data,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
    return chartData;
  };

  const PredictedRiverData = (riverName) => {
    const Data = {
      labels,
      datasets: [
        {
          fill: true,
          label: `Water Level in (m) `,
          // data:
          //   wLevel &&
          //   wLevel[riverName] &&
          //   wLevel[riverName].map((station) => station?.value),
          data: predictedRiverData[riverName],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
    return Data;
  };
  const handlePredict = async () => {
    try {
      const results = await Promise.all(
        riverNames.map(async (riverName) => {
          const riverData = await Promise.all(
            fullDate.map(async (date) => {
              const predictedData = await fetchPredictedDatas(riverName, date);
              return {
                date: date,
                value: predictedData.value,
              };
            })
          );
          const riverObject = {};
          riverObject[riverName] = riverData;
          return riverObject;
        })
      );
      const levels = Object.assign({}, ...results);
      setWlevel(levels);
      return levels;
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(wLevel);
  useQuery({
    queryKey: ["datas"],
    queryFn: () => handlePredict(),
  });
 // console.log(cardData[selectedRiver], "cardData");
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
      <div className=" my-5">
        <div className=" d-flex flex-row justify-content-center mt-5 pt-5 ">
          <div class="form-group">
            <label for="exampleFormControlSelect1 " className="select-river text-center">Select River</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              value={selectedRiver}
              onChange={(e) => setSelectedRiver(e.target.value)}
            >
              <option> sinja</option>
              <option>humla_karnali</option>
              <option>chisapani </option>
              <option>sanobheri</option>
              <option>dipayal</option>
            </select>
          </div>
        </div>
        {selectedRiver && (
          <div className="row no-gutters d-flex justify-content-center mt-5  pl-5">
            <div className="col-lg-3">
              <div className="card-wrapper">
                <div className="card-section d-flex flex-row justify-content-center  align-items-center ">
                  <SiFlood
                    fill="rgba(30, 52, 75, 0.83)"
                    style={{ fontSize: "2.5rem" }}
                    className="mr-4"
                  />
                  <div className="pt-3">
                    <h5>{cardData[selectedRiver]?.low}m</h5>
                    <p>Lowest Water Level </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-wrapper ">
                <div className="card-section  d-flex flex-row justify-content-center align-items-center ">
                  <RiFloodFill
                    fill="rgba(30, 52, 75, 0.83)"
                    style={{ fontSize: "2.5rem" }}
                    className="mr-4"
                  />
                  <div className="pt-3">
                    <h5>{cardData[selectedRiver]?.high}m</h5>
                    <p> Highest Water Level</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-wrapper">
                <div className="card-section d-flex flex-row justify-content-center align-items-center ">
                  <MdFlood
                    fill="rgba(30, 52, 75, 0.83)"
                    style={{ fontSize: "2.5rem" }}
                    className="mr-4"
                  />

                  <div className="pt-3">
                    <h5>{cardData[selectedRiver]?.floodRecorded}</h5>
                    <p> Last Flood Recorded </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedRiver && (
          <div className="parent-row">
            <div className="row  mt-5 line-row flex justify-content-center">
              <div className="col-lg-6  line-col">
                <Line
                  options={getOptions(
                    `Historical Water Level for ${selectedRiver} river`
                  )}
                  data={historicalRiverData(selectedRiver)}
                />
              </div>
              <div className="col-lg-6  line-col">
                <Line
                  options={getOptions(
                    `Predicted 1 week data for ${selectedRiver} river`
                  )}
                  data={PredictedRiverData(selectedRiver)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
