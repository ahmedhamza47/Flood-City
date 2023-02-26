import axios from "axios";

export const fetchRealTimeData = async () => {
  const data = await axios.get("http://localhost:3000/datas/");

  return data;
};

export const getPredictedData = async () => {
  const data = await axios.get(`http://localhost:3001/datas/`);

  return data;
};
