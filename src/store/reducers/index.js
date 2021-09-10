import { combineReducers } from "redux";

import auth from "./auth";
import locations from "./locations";
import devices from "./devices";

export default combineReducers({ auth, locations, devices });
