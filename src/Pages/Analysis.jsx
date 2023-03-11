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
import { Bar, Line } from "react-chartjs-2";

import { faker } from "@faker-js/faker";
import { useQuery } from "@tanstack/react-query";
import {
  getFutureWeekdata,
  getOneWeekAgoData,
  fetchRealTimeData,
  fetchHistoricalData,
} from "../Components/API/API";
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
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Water Level (m)",
          },
        },
      ],
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Water Level for ${title} River  `,
      },
    },
  };
  return options;
};

export function Analysis() {
  const [labels, setLabels] = useState([]);
  const dates = [
    "20230306",
    "20230307",
    "20230308",
    "20230309",
    "20230310",
    "20230311",
    "20230312",
  ];

  useEffect(() => {
    const today = new Date();
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneWeekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const dates = [];

    for (
      let date = oneWeekAgo;
      date <= oneWeekFromNow;
      date.setDate(date.getDate() + 1)
    ) {
      dates.push(
        `${date.toLocaleString("default", {
          month: "short",
        })} ${date.getDate()}`
      );
    }

    setLabels(dates);
  }, []);

  // const futureData = {
  //   Sinja: [],
  //   Tila: [],
  //   Humla_Karnali: [],
  //   Budhiganga: [],
  //   Kandra: [],
  // };
  const riverName = ["Sinja", "Tila", "Humla Karnali", "Budhiganga", "Kandra"];

  const { data, isLoading, isError } = useQuery({
    queryKey: ["datas"],
    queryFn: () => fetchHistoricalData(),
  });
  console.log(data);
  const water_level = [];

  data?.forEach((station) => {
    water_level.push(station.value);
  });
  console.log(water_level);
  // const prevData =  [
  //   "0.2",
  //   "0.223",
  //   "0.211",
  //   "0.25",
  //   "0.25",
  //   "0.21",
  //   "0.25",
  //   "0.27",
  // ];
  // for (let i = 0; i < riverName.length; i++) {
  //   for (let j = 0; j < 7; j++) {
  //     // const forecastedData = getFutureWeekdata(riverName[i], dates[j]);
  //     const forecastedData = getFutureWeekdata();
  //     futureData[riverName[i]].push(forecastedData);
  //   }
  // }
  const RiverData = (river) => {
    // console.log(rivers);
    const Data = {
      labels,
      datasets: [
        {
          fill: true,
          label: `Water Level in (m) `,
          data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
    return Data;
  };

  return (
    <div className="analysis-chart">
      {riverName.map((name) => {
        return (
          <div className="mt-5 lineGraphs">
            <Line options={getOptions(name)} data={RiverData(name)} />
            <p className="text-center">(Today)</p>
          </div>
        );
      })}
    </div>
  );
}
