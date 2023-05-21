import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import "./RealTime.css";
import { useContext } from "react";
import {
  DataContext,
  initialValues,
} from "../../../Components/context/context";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAdminRealTimeData,
  fetchRealTimeData,
  postRealTimeData,
  updateRealTimeData,
} from "../../../Components/API/API";
const AdminRealTime = () => {
  const {
    realTimeForm,
    setRealTimeForm,
    selectedRiver,
    setSelectedRiver,
    editRealTimeData,
    setEditRealTimeData,
    realTimeData,
    setRealTimeData,
  } = useContext(DataContext);

  useQuery({
    queryKey: ["realTimeForm", selectedRiver],
    queryFn: () => fetchAdminRealTimeData(selectedRiver),
    staleTime: Infinity,
    onSuccess: (data) => {
      console.log(data[data.length - 1], "data");
      const newData = data[data.length - 1];
      setRealTimeForm({ ...newData, datetime: "", value: "" });
    },
  });
  // console.log(realTimeForm, "realTimeForm");
  const validate = yup.object().shape({
    value: yup.number().required("Value is required"),
    datetime: yup.string().required("Date is required"),
  });
  const handleFormSubmit = (values, resetForm) => {
    console.log(values, "//////////");
    if (editRealTimeData) {
      realTimeData.map((data) => {
        if (data.id === values.id && data.datetime === values.datetime) {
          Update(values);
        }
      });

      setEditRealTimeData(false);
    } else {
      if (values) {
        Post(values);
      }
    }
  };
  const queryClient = useQueryClient();
  const { mutate: Post } = useMutation(postRealTimeData, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("User Added Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
  const { mutate: Update } = useMutation(updateRealTimeData, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.update("User Edited Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
  const formik = useFormik({
    initialValues: realTimeForm,

    validationSchema: validate,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      handleFormSubmit(values, resetForm);
      resetForm({ values: initialValues });
    },
  });
  return (
    <div className="main w-100">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="riverName">River Name:</label> <br />
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectedRiver}
            onChange={(e) => setSelectedRiver(e.target.value)}
          >
            <option value="sinja">Sinja River</option>
            <option value="humla_karnali">Humla Karnali River</option>
            <option value="chisapani">Chisapani River</option>
            <option value="sanobheri">Sanobheri River</option>
            <option value="dipayal">Dipayal River</option>
          </select>
        </div>
      </div>

      {selectedRiver && (
        <div className="form my-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="container-fluid d-flex justify-content-center">
              <div className="form-group w-100">
                <div className="row no-gutters">
                  <div className="col-lg-4">
                    <div>
                      <label htmlFor="id">Id</label>
                      <input
                        type="text"
                        id="id"
                        name="id"
                        value={formik.values.id}
                        className="input-readonly"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <label htmlFor="basin">Basin</label>
                    <input
                      type="text"
                      id="basin"
                      name="basin"
                      value={formik.values?.basin}
                      className="input-readonly"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="dangerLevel">Danger Level</label>
                    <input
                      type="number"
                      id="dangerLevel"
                      name="dangerLevel"
                      value={formik.values?.danger_level}
                      className="input-readonly"
                      readOnly
                    />
                  </div>
                </div>
                <div className="row no-gutters mt-3">
                  <div className="col-lg-4  ">
                    <div>
                      <label htmlFor="longitude">Longitude</label>
                      <input
                        type="number"
                        id="longitude"
                        name="longitude"
                        value={formik.values?.longitude}
                        className="input-readonly"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                      type="number"
                      id="latitude"
                      name="latitude"
                      value={formik.values?.latitude}
                      className="input-readonly"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="warningLevel">Warning Level</label>
                    <input
                      type="number"
                      id="warningLevel"
                      name="warningLevel"
                      value={formik.values?.warning_level}
                      className="input-readonly"
                      readOnly
                    />
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-lg-4">
                    <label htmlFor="datetime">Date</label>
                    <input
                      type="text"
                      id="datetime"
                      name="datetime"
                      value={formik.values.datetime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.datetime && formik.touched.datetime ? (
                      <div className="error">{formik.errors.datetime}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="value">Water Level</label>
                    <input
                      type="number"
                      id="value"
                      name="value"
                      value={formik.values.value}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.value && formik.touched.value ? (
                      <div className="error">{formik.errors.value}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-4"></div>
                </div>
                <div className="row justify-content-center no-gutters">
                  <div>
                    <button
                      type="submit "
                      className="btn btn-primary submit-btn mt-5"
                    >
                      Submit{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminRealTime;
