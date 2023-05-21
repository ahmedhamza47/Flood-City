import axios from "axios";

export const fetchRealTimeData = async () => {
  try {
    const data = await axios.get("http://192.168.101.9:3300/realtime");
    console.log(data, "data");
    if (data) {
      const refinedData = data?.data?.filter((item) => {
        return (
          item.danger_level !== null &&
          item.warning_level !== null &&
          item.waterLevel !== null &&
          item.danger_level !== ""
        );
      });
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
      return refinedDatas;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw error;
  }
};

export const fetchAdminRealTimeData = async (riverName) => {
  try {
    const data = await axios.get(
      `http://192.168.101.9:3300/history/${riverName}`
    );
    return data.data;
  } catch (error) {
    throw error;
  }
};
export const getPredictedData = async (date) => {
  const sinjaData = await axios.get(
    `http://192.168.101.9:8000/forecast/sinja/${date}`
  );
  const humlaKarnaliData = await axios.get(
    `http://192.168.101.9:8000/forecast/humla_karnali/${date}`
  );
  const chisapaniData = await axios.get(
    `http://192.168.101.9:8000/forecast/chisapani/${date}`
  );
  const sanoBheriData = await axios.get(
    `http://192.168.101.9:8000/forecast/sanobheri/${date}`
  );
  const dipayalData = await axios.get(
    `http://192.168.101.9:8000/forecast/dipayal/${date}`
  );
  const datas = [
    sinjaData?.data,
    humlaKarnaliData?.data,
    dipayalData?.data,
    chisapaniData?.data,
    sanoBheriData?.data,
  ];
  return datas;
};
export const fetchPredictedDatas = async (riverName, Date) => {
  // console.log("....", fullDate);
  const data = await axios.get(
    `http://192.168.101.9:8000/forecast/${riverName}/${Date}`
  );
  //console.log("datasss", data);
  return data.data;
  // return "hello";
};

// export const getOneWeekAgoData = async () => {
//   // const data = await axios.get(`http://localhost:3002/datas`);
//   const data = [1, 2, 3, 4, 5, 6, 7];
//   return data;
// };
// export const getFutureWeekdata = () => {
//   // const data = await axios.get(`http://localhost:3002/datas`);
//   const data = faker.datatype.float({ min: 0.15, max: 0.3 });

//   return data;
// };

export const postUser = async (userInfo) => {
  const user = await axios.post("http://192.168.101.9:3300/Users", userInfo);
  return user;
};
export const updateUser = async (userInfo) => {
  const user = await axios.put(
    `http://192.168.101.9:3300/Users/${userInfo.id}`,
    userInfo
  );
  return user;
};
export const deleteUser = async (id, method = "delete") => {
  const user = await axios[method](`http://192.168.101.9:3300/Users/${id}`);
  return user;
};
export const fetchUser = async () => {
  // console.log("user", req);
  const user = await axios.get("http://192.168.101.9:3300/Users");
  return user.data;
};

export const historicalDataAPI = async () => {
  const data = await axios.get("http://localhost:3001/historical");
  return data.data;
};

export const postRealTimeData = async (data) => {
  const realTimeData = await axios.post(
    "http://192.168.101.9:3300/realtime",
    data
  );
  return realTimeData;
};
export const updateRealTimeData = async (data) => {
  const realTimeData = await axios.put(
    `http://192.168.101.9:3300/realtime/${data.id}`,
    data
  );
  return realTimeData;
};
export const deleteRealTimeData = async (data) => {
  console.log(data.datetime, "time.........");
  const realTimeData = await axios.delete(
    `http://192.168.101.9:3300/realtime/${data.id}/${data.datetime}`
  );
  return realTimeData;
};
