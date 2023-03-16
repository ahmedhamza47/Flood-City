import React, { useEffect, useState } from "react";
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

import { useQuery } from "@tanstack/react-query";
import { fetchPredictedDatas } from "../Components/API/API";

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

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

export function Analysis() {
  const [labels, setLabels] = useState([]);
  const [fullDate, setFullDate] = useState([]);
  const [wLevel, setWLevel] = useState([]);
  const [months, setMonths] = useState([]);
  useEffect(() => {
    const today = new Date();
    const oneWeekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const mmdd = [];
    const yyyymmdd = [];
    for (
      let date = today;
      date <= oneWeekFromNow;
      date.setDate(date.getDate() + 1)
    ) {
      mmdd.push(
        `${date.toLocaleString("default", {
          month: "short",
        })} ${date.getDate()}`
      );
      yyyymmdd.push(formatDate(date));
    }
    setLabels(mmdd);
    setFullDate(yyyymmdd);

    //------------12 months for historical data -----------
    const monthsArr = [];
    for (let i = 0; i < 12; i++) {
      const month = new Date(today.getFullYear(), today.getMonth() - i, 1); // calculate the month
      const monthName = month.toLocaleString("default", { month: "short" }); // get the abbreviated month name
      monthsArr.unshift(monthName); // add the month name to the array
    }

    setMonths(monthsArr);
  }, []);
  console.log(months);
  console.log(labels);
  //console.log(fullDate);
  //const fullDate = ['20230312', '20230313', '20230314', '20230315', '20230316', '20230317', '20230318', '20230319']
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
      setWLevel(levels);
      return levels;
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(wLevel);
  const { isLoading, isError } = useQuery({
    queryKey: ["datas"],
    queryFn: () => handlePredict(),
  });
  // console.log("levels", wLevel);
  //   console.log("datassss", data);
  // console.log(",,,,,,,", wLevel && wLevel?.chisapani && wLevel?.chisapani[0]);

  const riverData = {
    chisapani: [1, 2, 3.2, 4.5, 5, 6, 7, 8, 2, 3, 1, 0.7],
    dipayal: [1, 2, 3.2, 4.5, 5, 6, 7, 8, 2, 2, 1, 12, 10],
    sinja: [1, 2, 3.2, 4.5, 5, 6, 7, 8, 2, 3, 4, 1.4, 1],
    humla_karnali: [1, 2, 3.2, 4.5, 5, 6, 7, 8, 2, 1, 3.5, 2.4],
    sanobheri: [1, 2, 3.2, 4.5, 5, 6, 7, 8, 2, 5.2, 6, 6.8, 5.3],
  };
  //const mm = ["January", "February", "March", "April", "May", "June", "July"];
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
          data:
            wLevel &&
            wLevel[riverName] &&
            wLevel[riverName].map((station) => station?.value),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
    return Data;
  };

  return (
    <div className="my-5 rows">
      {riverNames?.map((name) => {
        return (
          <div className="parent-row">
            <div className="row mt-5 line-row flex justify-content-center">
              <div className="col-lg-6 mt-5 line-col">
                <Line
                  options={getOptions(
                    `Historical Water Level for ${name} river`
                  )}
                  data={historicalRiverData(name)}
                />
              </div>
              <div className="col-lg-6 mt-5 line-col">
                <Line
                  options={getOptions(
                    `Predicted 1 week data for ${name} river`
                  )}
                  data={PredictedRiverData(name)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
