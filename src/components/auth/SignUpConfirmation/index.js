import { makeStyles, Typography } from "@material-ui/core";

import WithShadow from "../../../hoc/common/WithShadow";
import signUpConfirmationSVG from "../../../assets/signup-confirmation.svg";
import { Link } from "react-router-dom";
import routes from "../../../router/routes";

const useStyles = makeStyles({
  card: {
    padding: 20,
    backgroundColor: "rgba(255,255,255,.9)",
    margin: 10,
    borderRadius: 10,
    width: 400,
  },
  image: {
    width: "100%",
    marginBottom: 50,
  },
});

const SignUpConfirmation = () => {
  const styles = useStyles();

  return (
    <WithShadow className={styles.card}>
      <div id="sign-up-confirmation">
        <Typography variant="h6" align="center">
          Su cuenta ha sido creada, por favor incie sesión para usar la
          plataforma.
        </Typography>
        <img
          src={signUpConfirmationSVG}
          alt="confirmation"
          className={styles.image}
        />
        <Link to={routes.SIGN_IN}>
          <Typography variant="h6" component="p" align="center">
            Ingresar
          </Typography>
        </Link>
      </div>
    </WithShadow>
  );
};

export default SignUpConfirmation;
