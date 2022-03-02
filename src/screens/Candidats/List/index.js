import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { get } from "../../../store/actions/candidat";
import { PATHS } from "../../../utils/constants";

import View from "./View";

const List = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const candidatsQuery = useSelector((state) => state.candidat.get);
  const onShow = (id) => push(`${PATHS.CANDIDATS.LIST}/${id}`);
  const onCreate = () => push(PATHS.CANDIDATS.CREATE);

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return <View {...{ candidatsQuery, onShow, onCreate }} />;
};

export default List;
