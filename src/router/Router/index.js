import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import withDrawer from "../../hoc/common/WithDrawer";

import SignIn from "../../pages/auth/SignIn";
import SignUp from "../../pages/auth/SignUp";
import LocationDetails from "../../pages/LocationDetails";
import Devices from "../../pages/Devices";
import Irrigations from "../../pages/Irrigations";
import Reports from "../../pages/Reports";

import routes from "../routes";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.EMPTY}>
        <Redirect to={routes.SIGN_IN} />
      </Route>
      <Route path={routes.SIGN_IN} component={SignIn} />
      <Route path={routes.SIGN_UP} component={SignUp} />
      <Route path={routes.LOCATIONS} component={withDrawer(LocationDetails)} />
      <Route path={routes.DEVICES} component={withDrawer(Devices)} />
      <Route path={routes.IRRIGATIONS} component={withDrawer(Irrigations)} />
      <Route path={routes.REPORTS} component={withDrawer(Reports)} />
    </Switch>
  </BrowserRouter>
);

export default Router;
