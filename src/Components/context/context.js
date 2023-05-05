import { useState, createContext, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";

export const DataContext = createContext();

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}
export const DataProvider = ({ children }) => {
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
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
