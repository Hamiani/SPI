import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import { getOne, remove } from "../../../store/actions/candidat";
import { PATHS } from "../../../utils/constants";

import View from "./View";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { goBack, push } = useHistory();
  const candidatQuery = useSelector((state) => state.candidat.getOne);

  const onGoBack = () => goBack();
  const onRemove = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      remove(
        data,
        () => {
          push(PATHS.CANDIDATS.LIST);
          onSuccessCallBack();
        },
        () => onErrorCallBack()
      )
    );
  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch, id]);

  return <View {...{ candidatQuery, onGoBack, onRemove }} />;
};

export default Detail;
