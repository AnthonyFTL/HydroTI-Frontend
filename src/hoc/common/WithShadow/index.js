import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: (props) => ({
    boxShadow: `0 3px 10px ${
      props.color !== "" ? props.color : "rgb(0 0 0 / 0.2)"
    }`,
  }),
});

const WithShadow = (props) => {
  const styles = useStyles(props);

  return (
    <div className={`${styles.root} ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

WithShadow.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

WithShadow.defaultProps = {
  color: "",
  children: null,
  className: "",
};

export default WithShadow;
