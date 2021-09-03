import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import RoleRadioButton from "./RoleRadioButton";

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
        label="option 1"
        name="option"
        value="option1"
        checked={value === "option1"}
        onChange={(e) => onChange(e.target.value)}
        src=""
      />
      <RoleRadioButton
        label="option 2"
        name="option"
        value="option2"
        checked={value === "option2"}
        onChange={(e) => onChange(e.target.value)}
        src=""
      />
    </div>
  );
};

RoleRadioButtons.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RoleRadioButtons;
