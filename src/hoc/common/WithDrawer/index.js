import { useHistory, useLocation } from "react-router-dom";

import Drawer from "../../../components/Common/Drawer";

import NatureIcon from "@material-ui/icons/Nature";
import WifiIcon from "@material-ui/icons/Wifi";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";

import routes from "../../../router/routes";
import role from "../../../model/role";

const withDrawer = (Component) => (props) => {
  const username = "Reiner Braun";
  const userRole = role.ROLE_IRRIGATION_CHIEF;

  const location = useLocation();
  const history = useHistory();

  const options = [
    {
      isActive: location.pathname === routes.LOCATIONS,
      icon: <NatureIcon />,
      text: "Ubicación",
      onClick: () => history.push(routes.LOCATIONS),
    },
    {
      isActive: location.pathname === routes.DEVICES,
      icon: <WifiIcon />,
      text: "Dispositivo",
      onClick: () => history.push(routes.DEVICES),
    },
    {
      isActive: location.pathname === routes.IRRIGATIONS,
      icon: <NatureIcon />,
      text: "Riego IOT",
      onClick: () => history.push(routes.IRRIGATIONS),
    },
    {
      isActive: location.pathname === routes.REPORTS,
      icon: <ViewQuiltIcon />,
      text: "Reportes",
      onClick: () => history.push(routes.REPORTS),
    },
  ];

  return (
    <Drawer options={options} username={username} userRole={userRole}>
      <Component {...props} />
    </Drawer>
  );
};

export default withDrawer;
