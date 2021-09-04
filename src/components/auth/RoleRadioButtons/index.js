import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import RoleRadioButton from "./RoleRadioButton";
import role from "../../../model/role";
import irrigationManagerSVG from "../../../assets/role-irrigation-manager.svg";
import irrigationChiefSVG from "../../../assets/role-irrigation-chief.svg";

const useStyles = makeStyles({
  roleRadioButtons: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 15,
  },
});

const RoleRadioButtons = ({ value, onChange }) => {
  const styles = useStyles();

  return (
    <div className={styles.roleRadioButtons}>
      <RoleRadioButton
        label="irrigation manager"
        name="role"
        value={role.ROLE_IRRIGATION_MANAGER}
        checked={value === role.ROLE_IRRIGATION_MANAGER}
        onChange={(e) => onChange(e.target.value)}
        src={irrigationManagerSVG}
      />
      <RoleRadioButton
        label="irrigation director"
        name="role"
        value={role.ROLE_IRRIGATION_CHIEF}
        checked={value === role.ROLE_IRRIGATION_CHIEF}
        onChange={(e) => onChange(e.target.value)}
        src={irrigationChiefSVG}
      />
    </div>
  );
};

RoleRadioButtons.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RoleRadioButtons;
