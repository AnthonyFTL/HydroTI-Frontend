import PropTypes from "prop-types";

import Chip from "@material-ui/core/Chip";
import red from "@material-ui/core/colors/red";
import indigo from "@material-ui/core/colors/indigo";
import green from "@material-ui/core/colors/green";
import locationState from "../../../../model/locationState";

const StateChip = ({ state }) => {
  let label, backgroundColor, color;

  switch (state) {
    case locationState.WITHOUT_CONNECTION: {
      label = "Sin conexión";
      backgroundColor = red[100];
      color = red[700];
      break;
    }
    case locationState.SUSPENDED_IRRIGATION: {
      label = "Riego suspendido";
      backgroundColor = indigo[100];
      color = indigo[700];
      break;
    }
    case locationState.IRRIGATION_IN_PROGRESS: {
      label = "Riego en curso";
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
  state: PropTypes.oneOf(Object.values(locationState)).isRequired,
};

export default StateChip;
