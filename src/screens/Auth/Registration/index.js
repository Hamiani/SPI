import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import get from "lodash/get";

import { register } from "../../../store/actions/auth";

import View from "./view";
import { useHistory } from "react-router";
import { PATHS } from "../../../utils/constants";

const Registration = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const registrationQuery = useSelector((state) => state.auth.register);

  const onRegister = (data) =>
    dispatch(
      register(
        data,
        (response) => {
          notification.open({
            message: get(response, "message"),
            type: "success",
          });
          push(PATHS.LOGIN);
        },
        (error) => {
          notification.open({
            message: get(error, "message"),
            type: "error",
          });
        }
      )
    );
  return <View {...{ registrationQuery, onRegister }} />;
};

export default Registration;
