import { useHistory, useLocation } from "react-router-dom";

import Drawer from "../../../components/Common/Drawer";

import NatureIcon from "@material-ui/icons/Nature";
import WifiIcon from "@material-ui/icons/Wifi";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";

import routes from "../../../router/routes";

const withDrawer = (Component) => (props) => {
  const location = useLocation();
  const history = useHistory();

  const options = [
    {
      isActive: location.pathname === routes.LOCATIONS,
      icon: <NatureIcon />,
      text: "Ubicaciones",
      onClick: () => history.push(routes.LOCATIONS),
    },
    {
      isActive: location.pathname === routes.DEVICES,
      icon: <WifiIcon />,
      text: "Dispositivos",
      onClick: () => history.push(routes.DEVICES),
    },
    {
      isActive: location.pathname === routes.REPORTS,
      icon: <ViewQuiltIcon />,
      text: "Reportes",
      onClick: () => history.push(routes.REPORTS),
    },
  ];

  return (
    <Drawer options={options}>
      <Component {...props} />
    </Drawer>
  );
};

export default withDrawer;
