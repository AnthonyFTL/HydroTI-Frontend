import { combineReducers } from "redux";

import common from "./Common";
import auth from "./auth";

export default combineReducers({ common, auth });
