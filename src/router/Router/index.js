import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes";

import SignIn from "../../pages/auth/SignIn";
import SignUp from "../../pages/auth/SignUp";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.EMPTY}>
        <Redirect to={routes.SIGN_IN} />
      </Route>
      <Route path={routes.SIGN_IN} component={SignIn} />
      <Route path={routes.SIGN_UP} component={SignUp} />
      <Route path={routes.HOME} component={null} />
    </Switch>
  </BrowserRouter>
);

export default Router;
