import PropTypes from "prop-types";

import authBackground from "../../../../assets/auth-background.jpg";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import Alert from "../../../../components/Common/Alert";

const useStyles = makeStyles({
  page: {
    backgroundImage: `url(${authBackground})`,
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  body: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
  },
  appBar: {
    flexGrow: 1,
  },
  appBarTitle: {
    flexGrow: 1,
  },
  errorMessage: {
    margin: 10,
  },
});

const AuthPageTemplate = ({ children, errorMessage, onErrorMessageClose }) => {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      <div className={styles.appBar}>
        <AppBar position="static" color="default">
          <Toolbar variant="dense">
            <Typography variant="h6" className={styles.appBarTitle}>
              HydroTI
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      {errorMessage && (
        <div className={styles.errorMessage}>
          <Alert
            severity="error"
            text={errorMessage}
            onClose={onErrorMessageClose}
          />
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
};

AuthPageTemplate.propTypes = {
  children: PropTypes.node,
  errorMessage: PropTypes.string,
  onErrorMessageClose: PropTypes.func,
};

AuthPageTemplate.defaultProps = {
  children: null,
  errorMessage: "",
  onErrorMessageClose: () => {},
};

export default AuthPageTemplate;
