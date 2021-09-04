import { makeStyles, Typography, useTheme } from "@material-ui/core";
import PropTypes from "prop-types";

import WithShadow from "../../../../hoc/WithShadow";

const useStyles = makeStyles({
  card: {
    width: "100%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    overflow: "hidden",
  },
  roleRadioButton: {
    padding: 10,
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
    <WithShadow
      color={checked ? theme.palette.primary.light : ""}
      className={styles.card}
    >
      <div className={styles.roleRadioButton}>
        <label>
          <input
            className={styles.radioButton}
            type="radio"
            checked={checked}
            {...rest}
          />
          <img className={styles.image} src={src} alt="radio" />
          <Typography variant="body1">{label}</Typography>
        </label>
      </div>
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
