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

  return <div className={styles.root}>{props.children}</div>;
};

WithShadow.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};

WithShadow.defaultProps = {
  color: "",
  children: null,
};

export default WithShadow;
