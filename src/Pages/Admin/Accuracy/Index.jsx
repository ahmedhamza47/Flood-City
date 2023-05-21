import React from "react";
import AdminRealTime from "./AdminRealTimeForm";
import RealTimeTable from "./RealTimeTable";
import "./RealTime.css";
const Index = () => {
  return (
    <div className="realTime">
      <AdminRealTime />
      <RealTimeTable />
    </div>
  );
};

export default Index;
