import { useState } from "react";
import PropTypes from "prop-types";

import Drawer from "../../../components/Common/Drawer";

import NatureIcon from "@material-ui/icons/Nature";
import WifiIcon from "@material-ui/icons/Wifi";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";

const WithDrawer = () => {
  const [active, setActive] = useState("Ubicaciones");

  const options = [
    {
      icon: <NatureIcon />,
      text: "Ubicaciones",
    },
    {
      icon: <WifiIcon />,
      text: "Dispositivos",
    },
    {
      icon: <ViewQuiltIcon />,
      text: "Reportes",
    },
  ];

  return (
    <>
      <Drawer options={options} active={active} onItemClick={setActive} />
    </>
  );
};

WithDrawer.propTypes = {
  children: PropTypes.node,
};

export default WithDrawer;
