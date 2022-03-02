import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { create } from "../../../store/actions/formation";
import { PATHS } from "../../../utils/constants";

import View from "./View";

const Create = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const createQuery = useSelector((state) => state.formation.create);

  const onCreate = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      create(
        data,
        () => {
          push(PATHS.FORMATIONS.HOME);
          onSuccessCallBack();
        },
        () => onErrorCallBack()
      )
    );

  return <View {...{ createQuery, onCreate }} />;
};

export default Create;
