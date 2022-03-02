import { actions } from "../../reducers/promotion";
import { PromotionActionsTypes } from "../action-types";

const formationActionsBuilder = {
  GET: {
    START: actions[PromotionActionsTypes.GET.START],
    SUCCESS: actions[PromotionActionsTypes.GET.SUCCESS],
    FAIL: actions[PromotionActionsTypes.GET.FAIL],
  },
  GET_ONE: {
    START: actions[PromotionActionsTypes.GET_ONE.START],
    SUCCESS: actions[PromotionActionsTypes.GET_ONE.SUCCESS],
    FAIL: actions[PromotionActionsTypes.GET_ONE.FAIL],
  },
  CREATE: {
    START: actions[PromotionActionsTypes.CREATE.START],
    SUCCESS: actions[PromotionActionsTypes.CREATE.SUCCESS],
    FAIL: actions[PromotionActionsTypes.CREATE.FAIL],
  },
  REMOVE: {
    START: actions[PromotionActionsTypes.REMOVE.START],
    SUCCESS: actions[PromotionActionsTypes.REMOVE.SUCCESS],
    FAIL: actions[PromotionActionsTypes.REMOVE.FAIL],
  },
};

export default formationActionsBuilder;
