import { useState, createContext, useRef, useEffect } from "react";

export const DataContext = createContext();
export const initialValues = {
  name: "",
  email: "",
  phone_no: "",
  longitude: "",
  latitude: "",
};

export const realTimeInitialValues = {
  id: "",
  name: "",
  latitude: "",
  longitude: "",
  value: "",
  datetime: "",
  warning_level: "",
  danger_level: "",
  basin: "",
};

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}
export const DataProvider = ({ children }) => {
  // user admin panel
  const [formValues, setFormValues] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(false);

  // real time admin Panel
  const [selectedRiver, setSelectedRiver] = useState("sinja");

  const [realTimeForm, setRealTimeForm] = useState(realTimeInitialValues);
  const [realTimeData, setRealTimeData] = useState([]);
  const [editRealTimeData, setEditRealTimeData] = useState(false);
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
      const month = new Date(today.getFullYear(), i, 1); // calculate the month
      const monthName = month.toLocaleString("default", { month: "short" }); // get the abbreviated month name
      monthsArr.push(monthName); // add the month name to the array
    }

    setMonths(monthsArr);
  }, []);
  // console.log(months, "monthsArr");
  // console.log( labels,'mmdd');
  // console.log(fullDate,'fullDate');

  const handleRef = useRef(null);
  const handleArrowClick = () => {
    handleRef.current.scrollIntoView({ behavior: "smooth" });
    //   console.log(handleRef, "handleRef")
  };
  const values = {
    labels,
    fullDate,
    wLevel,
    setWLevel,
    months,
    handleArrowClick,
    handleRef,
    formValues,
    setFormValues,
    users,
    setUsers,
    editUser,
    setEditUser,
    realTimeData,
    setRealTimeData,
    realTimeForm,
    setRealTimeForm,
    selectedRiver,
    setSelectedRiver,
    editRealTimeData,
    setEditRealTimeData,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
