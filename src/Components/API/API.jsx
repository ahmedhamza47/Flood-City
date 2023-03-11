import { faker } from "@faker-js/faker";
import axios from "axios";

export const fetchRealTimeData = async () => {
  const data = await axios.get("http://192.168.101.8:3300/realtime");
  const refinedData = data?.data?.filter((item) => {
    return (
      item.danger_level !== null &&
      item.warning_level !== null &&
      item.waterLevel !== null &&
      item.danger_level !== ""
    );
  });
  // console.log("refined ", refinedData);
  let refinedDatas = "";
  if (refinedData) {
    const groupedDatas = refinedData?.reduce((groups, data) => {
      if (
        !groups[data.id] ||
        new Date(data.datetime) > new Date(groups[data.id].datetime)
      ) {
        groups[data.id] = data;
      }
      return groups;
    }, {});

    refinedDatas = Object?.values(groupedDatas);
  }
  // console.log("datrasss..", refinedDatas);
  // http://localhost:3001/forecast/sinja/date
  // console.log("data.....", data);
  return refinedDatas;
};

export const getPredictedData = async (date) => {
  const sinjaData = await axios.get(
    `http://192.168.101.8:8000/forecast/sinja/${date}`
  );
  const humlaKarnaliData = await axios.get(
    `http://192.168.101.8:8000/forecast/humla_karnali/${date}`
  );

  const datas = [...sinjaData, ...humlaKarnaliData];
  return datas;
};

export const getOneWeekAgoData = async () => {
  // const data = await axios.get(`http://localhost:3002/datas`);
  const data = [1, 2, 3, 4, 5, 6, 7];
  return data;
};
export const getFutureWeekdata = () => {
  // const data = await axios.get(`http://localhost:3002/datas`);
  const data = faker.datatype.float({ min: 0.15, max: 0.3 });

  return data;
};

export const postUser = async (req) => {
  console.log(req);
  const user = await axios.post("http://localhost:3003/User", req);
  return user;
};
export const fetchHistoricalData = async () => {
  const user = await axios.get("http://192.168.101.8:3300/realtime/sinja/data");
  return user;
};
