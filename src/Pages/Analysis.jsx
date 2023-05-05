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
import { format, parse } from "date-fns";

import { Line } from "react-chartjs-2";
import { MdFlood } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import {
  predictedRiverData,
  riverData,
  cardData,
  historicalData,
} from "../Datas/AnalysisDatas";
import { DataContext } from "../Components/context/context";
import { fetchPredictedDatas, historicalDataAPI } from "../Components/API/API";
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
  const { labels, months, wLevel, setWLevel, fullDate } =
    useContext(DataContext);
  const [selectedRiver, setSelectedRiver] = useState("sinja");
  const [historical, setHistorical] = useState([]);
  // console.log(historical,'....')
  // const data =  historicalData?.find((data) => data?.name === 'chisapani');
  // console.log(data?.avgval,'data');
  // const handleSelect = (riverName) => {
  //   console.log(riverName, "riverName");

  //   setSelectedRiver(riverName);
  //   const data = historicalData?.find((data) => data?.name === riverName);
  //   setHistorical(data);
  //   // console.log(historical,'historical')
  // };

  useEffect(() => {
    // setSelectedRiver("sinja");
    // const data = historicalData?.find((data) => data?.name === selectedRiver);
    // setHistorical(data);
    //  console.log(historical,'historical')
    handleHistorical("sinja");
    handlePredict();
  }, []);
  // useQuery({
  //   queryKey: ["datas"],
  //   queryFn: () => handlePredict(),
  // });
  //console.log('histirical',historical)
  const historicalRiverData = (riverName) => {
    // console.log(historical,'historical')
    // const data =  historicalData?.find((data) => data?.name === riverName);
    const data = historical?.avgval;
    // console.log(data, "data---");
    // if (!data) {
    //   return null; // or return a default object with an error message or something
    // }'
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
    // console.log(riverName, "riverName");
    const Data = {
      labels,
      datasets: [
        {
          fill: true,
          label: `Water Level in (m) `,
          data:
            wLevel &&
            wLevel[riverName] &&
            wLevel[riverName].map((station) => station?.value),
          //  data: predictedRiverData[riverName],
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
        riverNames?.map(async (riverName) => {
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
      setWLevel(levels);
      return levels;
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(wLevel);

  const handleHistorical = async (riverName) => {
    const h = await historicalDataAPI();
    //console.log(h, "hhh");
    const data = h?.find((data) => data?.name === riverName);
    // console.log(data, "data");
    setSelectedRiver(riverName);

    setHistorical(data);
  };

  // useQuery({
  //   queryKey: ["historical"],
  //   queryFn: () => handleHistorical(),
  // });

  // console.log(cardData[selectedRiver], "cardData");
  const lastFloodDateFormat = (dateString) => {
    if (dateString) {
      const dateObj = parse(
        dateString,
        "EEEE, MMMM d, yyyy 'at' h:mm:ss a 'UTC'",
        new Date()
      );
      const formattedDate = format(dateObj, "MMMM d, yyyy");
      // console.log(formattedDate, "format");
      return formattedDate;
    } else {
      return null;
    }
  };
  lastFloodDateFormat("Tuesday, October 19, 2021 at 2:35:00 AM UTC");
  // console.log(formattedDate, "format"); // Output: "October 19, 2021"
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
      <div className=" my-5">
        <div className=" d-flex flex-row justify-content-center mt-5 pt-5 ">
          <div className="form-group">
            <label
              htmlFor="exampleFormControlSelect1 "
              className="select-river text-center"
            >
              Select River
            </label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={selectedRiver}
              onChange={(e) => handleHistorical(e.target.value)}
            >
              <option value="sinja">Sinja River</option>
              <option value="humla_karnali">Humla Karnali River</option>
              <option value="chisapani">Chisapani River</option>
              <option value="sanobheri">Sanobheri River</option>
              <option value="dipayal">Dipayal River</option>
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
                    <h5>{Number(historical?.lowest_value).toFixed(2)} m</h5>
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
                    <h5>{Number(historical?.highest_Value).toFixed(2)} m</h5>
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
                    <h5>{lastFloodDateFormat(historical?.exceed_warning)}</h5>
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
