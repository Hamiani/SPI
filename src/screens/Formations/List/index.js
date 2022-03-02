import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { get, remove } from "../../../store/actions/formation";
import { PATHS } from "../../../utils/constants";

import View from "./View";

const List = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  const onRemove = (data) => dispatch(remove(data, () => dispatch(get())));

  const onShow = (id) => push(`${PATHS.FORMATIONS.LIST}/${id}`);

  const onCreate = () => push(PATHS.FORMATIONS.CREATE);
  const onUpdate = (id) => push(`${PATHS.FORMATIONS.UPDATEE}/${id}`);

  const formationQuery = useSelector((state) => state.formation.get);
  return <View {...{ formationQuery, onRemove, onShow, onCreate, onUpdate }} />;
};
export default List;
