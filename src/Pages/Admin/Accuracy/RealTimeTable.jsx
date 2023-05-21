import {
  deleteRealTimeData,
  fetchAdminRealTimeData,
} from "../../../Components/API/API";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useContext } from "react";
import { DataContext } from "../../../Components/context/context";

import { toast } from "react-toastify";
// function createData(userName, email, lat, lng, phone) {
//   return { userName, email, lat, lng, phone };
// }

// const rows = [
//   createData(
//     " pukar47",
//     "pukar@gmail.com",
//     "87.455557",
//     "87.333311",
//     "9841719564"
//   ),
//   createData("ahmed", "hamza@gmai.com", "87.455557", "87.333311", "9823719571"),
//   createData(
//     "dikkim34",
//     "dikkim@gmail.com",
//     "87.455557",
//     "87.333311",
//     "9849719511"
//   ),
// ];

// const makeStyle = (status) => {
//   if (status === "Approved") {
//     return {
//       background: "rgb(145 254 159 / 47%)",
//       color: "green",
//     };
//   } else if (status === "Pending") {
//     return {
//       background: "#ffadad8f",
//       color: "red",
//     };
//   } else {
//     return {
//       background: "#59bfff",
//       color: "white",
//     };
//   }
// };

export default function RealTimeTable() {
  const {
    selectedRiver,
    setSelectedRiver,
    realTimeData,
    setRealTimeData,
    setEditRealTimeData,
    setRealTimeForm,
  } = useContext(DataContext);
  const queryClient = useQueryClient();
  console.log(selectedRiver, "selectedRiverRealTime");
  useQuery({
    queryKey: ["realTime", selectedRiver],
    queryFn: () => fetchAdminRealTimeData(selectedRiver),
    onSuccess: (data) => {
      data && setRealTimeData(data || []);
      console.log(realTimeData, "realTimeData");
      //   queryClient.invalidateQueries();
    },
  });
  //   console.log(realTimeData, "realTimeData");
  const handleEdit = (row) => {
    setRealTimeForm(row);
    setEditRealTimeData(true);
  };
  const handleDelete = (row) => {
    console.log(row.id, "row.id");
    mutate(row);
  };
  const { mutate } = useMutation({
    mutationFn: deleteRealTimeData,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries();
      toast.error(" User Deleted", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
  return (
    <div className="tables">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col"> ID</th>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Basin</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
            <th scope="col">Warning Level</th>
            <th scope="col">Danger Level</th>
            <th scope="col">Water Level</th>
            <th scope="col"> Actions</th>
          </tr>
        </thead>
        <tbody>
          {realTimeData && realTimeData.length > 0 ? (
            realTimeData?.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.datetime}</td>
                <td>{row.name}</td>
                <td>{row.basin}</td>
                <td>{row.latitude}</td>
                <td> {row.longitude}</td>
                <td>{row.warning_level}</td>
                <td>{row.danger_level}</td>
                <td>{row.value}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(row)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ml-3"
                    onClick={() => handleDelete(row)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
