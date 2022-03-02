import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { get } from "../../../store/actions/promotion";
import { create } from "../../../store/actions/candidat";
import { PATHS } from "../../../utils/constants";
import View from "./view";

const Create = () => {
  const dispatch = useDispatch();
  const promotionsQuery = useSelector((state) => state.promotion.get);
  const createQuery = useSelector((state) => state.candidat.create);
  const { push } = useHistory();
  const onCandidatsClick = () => push(PATHS.CANDIDATS.LIST);

  const onCreate = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      create(
        data,
        () => {
          onCandidatsClick();
          onSuccessCallBack();
        },
        () => onErrorCallBack()
      )
    );

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);
  return (
    <View {...{ onCandidatsClick, promotionsQuery, onCreate, createQuery }} />
  );
};

export default Create;
