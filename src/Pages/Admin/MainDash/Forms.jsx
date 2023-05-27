import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUser, updateUser } from "../../../Components/API/API";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";

import {
  DataContext,
  initialValues,
} from "../../../Components/context/context";
import { toast } from "react-toastify";

const InputForm = () => {
  const validate = yup.object().shape({
    name: yup.string().required().max(20).min(2),
    email: yup.string().email().required(),
    phone_no: yup
      .string()
      .required()
      .min(10)
      .max(10)
      .matches(/^98\d{8}$/, "Number must start with 98"),
    longitude: yup.string().required().min(2).max(10),
    latitude: yup.string().required().min(2).max(10),
  });
  const { formValues, users, editUser, setEditUser } = useContext(DataContext);
  const handleFormSubmit = (values, resetForm) => {
    console.log(values, "values");
    if (editUser) {
      users.map((user) => {
        if (user.id === values.id) {
          console.log("....");
          Update(values);
        }
      });

      setEditUser(false);
    } else {
      if (values) {
        Post({ id: uuidv4(), ...values });
      }
    }
  }; //9811111132
  const queryClient = useQueryClient();
  const { mutate: Post } = useMutation(postUser, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("User Added Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
  const { mutate: Update } = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.update("User Edited Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
  const formik = useFormik({
    initialValues: formValues,

    validationSchema: validate,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      handleFormSubmit(values, resetForm);
      resetForm({ values: initialValues });
    },
  });
  return (
    <div>
      <h1>Form</h1>
      <div className="form my-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="container-fluid d-flex justify-content-center">
            <div className="form-group">
              <div className="row  no-gutters">
                <div className="col-xl-4 mb-3 ">
                  <div>
                    <label htmlFor="name">Username</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <div className="error">{formik.errors.name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-xl-4 mb-3  ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="col-xl-4 mb-3  phone-input">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phone_no"
                    value={formik.values.phone_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.phone_no && formik.touched.phone_no ? (
                    <div className="error">{formik.errors.phone_no}</div>
                  ) : null}
                </div>
              </div>
              <div className="row  no-gutters ">
                <div className="col-xl-4 mb-3   ">
                  <div>
                    <label htmlFor="longitude">Longitude</label>
                    <input
                      type="number"
                      id="longitude"
                      name="longitude"
                      value={formik.values.longitude}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.longitude && formik.touched.longitude ? (
                      <div className="error">{formik.errors.longitude}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-xl-4 mb-3 ">
                  <label htmlFor="latitude">Latitude</label>
                  <input
                    type="number"
                    id="latitude"
                    name="latitude"
                    value={formik.values.latitude}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.latitude && formik.touched.latitude ? (
                    <div className="error">{formik.errors.latitude}</div>
                  ) : null}
                </div>
              </div>
              <div className="row justify-content-center no-gutters">
                <div>
                  <button
                    type="submit "
                    className="btn btn-primary submit-btn mt-3"
                  >
                    Submit{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
