import { deleteUser, fetchUser } from "../../../Components/API/API";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { DataContext } from "../../../Components/context/context";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import "./Table.css";
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

export default function BasicTable() {
  const { users, setUsers, setFormValues, setEditUser } =
    useContext(DataContext);
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
    staleTime: Infinity,
    onSuccess: (data) => {
      data && setUsers(data);
      // queryClient.invalidateQueries();
    },
  });

  const handleEdit = (row) => {
    setFormValues(row);
    setEditUser(true);
  };
  const handleDelete = (row) => {
    mutate(row.id);
  };
  const { mutate } = useMutation({
    mutationFn: (req) => deleteUser(req),
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
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users?.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.latitude}</td>
                <td>{row.longitude}</td>
                <td>{row.phone_no}</td>
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
