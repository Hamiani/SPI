import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import get from "lodash/get";

import { login } from "../../../store/actions/auth";
import { Context } from "../../../Shared/Context";
import View from "./view";
import { useHistory } from "react-router";
import { PATHS } from "../../../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const loginQuery = useSelector((state) => state.auth.login);
  const { setToken, setUser } = useContext(Context);

  const onLogin = async (data) =>
    dispatch(
      login(
        data,
        async (data) => {
          const id = get(data, "id");
          const username = get(data, "username");
          const accessToken = get(data, "accessToken");
          await setToken(accessToken);
          await setUser({ id, username });
          notification.open({
            message: "Connexion réussie",
            type: "success",
          });
          push(PATHS.SUBSCRIPTIONS.LIST);
        },
        (error) => {
          notification.open({
            message: get(error, "message"),
            type: "error",
          });
        }
      )
    );

  return <View onLogin={onLogin} loginQuery={loginQuery} />;
};

export default Login;
