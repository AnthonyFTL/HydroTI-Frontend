import { makeStyles, useTheme } from "@material-ui/core";
import PropTypes from "prop-types";

import WithShadow from "../../../../hoc/WithShadow";

const useStyles = makeStyles({
  roleRadioButton: {
    width: "100%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    overflow: "hidden",
  },
  radioButton: {
    display: "none",
  },
  image: {
    width: "100%",
  },
  label: {
    margin: "10px 0",
  },
});

const RoleRadioButton = ({ label, src, checked, ...rest }) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <WithShadow color={checked ? theme.palette.primary.light : ""}>
      <label className={styles.roleRadioButton}>
        <input
          className={styles.radioButton}
          type="radio"
          checked={checked}
          {...rest}
        />
        <img className={styles.image} src={src} alt="radio" />
        <p className={styles.label}>{label}</p>
      </label>
    </WithShadow>
  );
};

RoleRadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  src: PropTypes.any.isRequired,
  checked: PropTypes.bool,
};

RoleRadioButton.defaultProps = {
  checked: false,
};

export default RoleRadioButton;
