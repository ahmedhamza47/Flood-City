import {
  deleteRealTimeData,
  fetchAdminRealTimeData,
} from "../../../Components/API/API";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { DataContext } from "../../../Components/context/context";

import { toast } from "react-toastify";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function RealTimeTable() {
  const { selectedRiver, realTimeData, setEditRealTimeData, setRealTimeForm } =
    useContext(DataContext);
  const queryClient = useQueryClient();
  console.log(selectedRiver, "selectedRiverRealTime");
  const { data: riverData } = useQuery({
    queryKey: ["realTime", selectedRiver],
    queryFn: () => fetchAdminRealTimeData(selectedRiver),
    onSuccess: (data) => {},
    staleTime: Infinity,
    cacheTime: 0,
  });

  console.log(realTimeData, "realTimeData");
  const handleEdit = (row) => {
    setRealTimeForm(row);
    setEditRealTimeData(true);
  };
  const handleDelete = (row) => {
    // console.log(row.id, "row.id");
    mutate(row);
  };
  const { mutate } = useMutation({
    mutationFn: deleteRealTimeData,
    onSuccess: () => {
      //  console.log("success");
      queryClient.invalidateQueries();
      toast.error(" Data Deleted", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });

  console.log({ riverData });
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
          {riverData && riverData.length > 0 ? (
            riverData?.map((row) => (
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
                <td className="d-flex">
                  <FaEdit
                    className="edit-icon"
                    onClick={() => handleEdit(row)}
                  />

                  <FaTrashAlt
                    className="delete-icon"
                    onClick={() => handleDelete(row)}
                  />
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
