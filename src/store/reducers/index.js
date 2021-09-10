import { combineReducers } from "redux";

import auth from "./auth";
import locations from "./locations";
import locationDetails from "./locationDetails";

export default combineReducers({ auth, locations, locationDetails });
