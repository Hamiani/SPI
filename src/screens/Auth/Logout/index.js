import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { PATHS } from "../../../utils/constants";
import { Context } from "../../../Shared/Context";

const Logout = () => {
  const dispatch = useDispatch();
  const { clearStore } = useContext(Context);

  useEffect(() => {
    clearStore();
  }, [clearStore, , dispatch]);

  return <Redirect to={PATHS.LOGIN} />;
};

export default Logout;
