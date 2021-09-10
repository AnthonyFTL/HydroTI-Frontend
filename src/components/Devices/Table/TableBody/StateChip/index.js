import PropTypes from "prop-types";

import Chip from "@material-ui/core/Chip";
import red from "@material-ui/core/colors/red";
import indigo from "@material-ui/core/colors/indigo";
import green from "@material-ui/core/colors/green";

import deviceState from "../../../../../model/deviceState";

const StateChip = ({ state }) => {
  let label, backgroundColor, color;

  switch (state) {
    case deviceState.DISCONNECTED: {
      label = "Desconectado";
      backgroundColor = red[100];
      color = red[700];
      break;
    }
    case deviceState.SUSPENDED: {
      label = "Suspendido";
      backgroundColor = indigo[100];
      color = indigo[700];
      break;
    }
    case deviceState.ACTIVE: {
      label = "Activo";
      backgroundColor = green[100];
      color = green[700];
      break;
    }
  }

  return (
    <Chip label={label} style={{ width: "100%", backgroundColor, color }} />
  );
};

StateChip.propTypes = {
  state: PropTypes.oneOf(Object.values(deviceState)).isRequired,
};

export default StateChip;
