import { combineReducers } from "redux";

import auth from "./auth";
import locations from "./locations";

export default combineReducers({ auth, locations });
