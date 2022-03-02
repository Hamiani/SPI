import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getOne, remove } from "../../../store/actions/formation";

import View from "./View";
import { PATHS } from "../../../utils/constants";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { push, goBack } = useHistory();

  const formationQuery = useSelector((state) => state.formation.getOne);
  const removeQuery = useSelector((state) => state.formation.remove);

  const onRemove = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      remove(
        data,
        () => {
          push(PATHS.FORMATIONS.HOME);
          onSuccessCallBack();
        },
        () => onErrorCallBack()
      )
    );
  const onGoBack = () => goBack();

  const onUpdate = (id) => push(`${PATHS.FORMATIONS.UPDATEE}/${id}`);

  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch, id]);

  return (
    <View {...{ formationQuery, removeQuery, onRemove, onUpdate, onGoBack }} />
  );
};

export default Detail;
