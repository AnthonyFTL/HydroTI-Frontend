import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import RoleRadioButton from "./RoleRadioButton";
import role from "../../../model/role";
import irrigationManagerSVG from "../../../assets/role-irrigation-manager.svg";
import irrigationChiefSVG from "../../../assets/role-irrigation-chief.svg";

const useStyles = makeStyles((theme) => ({
  roleRadioButtons: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 15,
  },
  errorMessage: {
    color: theme.palette.error.main,
    marginTop: 20,
    marginLeft: 14,
  },
}));

const RoleRadioButtons = ({ value, onChange, hasError, errorMessage }) => {
  const styles = useStyles();

  return (
    <div>
      <div className={styles.roleRadioButtons}>
        <RoleRadioButton
          label="irrigation manager"
          name="role"
          value={role.ROLE_IRRIGATION_MANAGER}
          checked={value === role.ROLE_IRRIGATION_MANAGER}
          onChange={(e) => onChange(e.target.value)}
          src={irrigationManagerSVG}
          hasError={hasError}
        />
        <RoleRadioButton
          label="irrigation director"
          name="role"
          value={role.ROLE_IRRIGATION_CHIEF}
          checked={value === role.ROLE_IRRIGATION_CHIEF}
          onChange={(e) => onChange(e.target.value)}
          src={irrigationChiefSVG}
          hasError={hasError}
        />
      </div>
      {hasError && (
        <div className={styles.errorMessage}>
          <Typography variant="caption">{errorMessage}</Typography>
        </div>
      )}
    </div>
  );
};

RoleRadioButtons.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

RoleRadioButtons.defaultProps = {
  hasError: false,
  errorMessage: "",
};

export default RoleRadioButtons;
