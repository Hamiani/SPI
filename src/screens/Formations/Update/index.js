import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getOne, update } from "../../../store/actions/formation";
import { PATHS } from "../../../utils/constants";

import View from "./View";

const Update = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();

  const onUpdate = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      update(
        data,
        () => {
          push(PATHS.FORMATIONS.HOME);
          onSuccessCallBack();
        },
        () => onErrorCallBack()
      )
    );

  const formationQuery = useSelector((state) => state.formation.getOne);
  const updateQuery = useSelector((state) => state.formation.update);
  console.log("updateQuery :>> ", updateQuery);

  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch, id]);

  return <View {...{ formationQuery, updateQuery, onUpdate }} />;
};

export default Update;
