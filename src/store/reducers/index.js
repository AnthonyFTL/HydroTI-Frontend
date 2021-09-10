import { combineReducers } from "redux";

import auth from "./auth";
import locations from "./locations";
import devices from "./devices";
import locationDetails from "./locationDetails";

export default combineReducers({ auth, locations, devices, locationDetails });
