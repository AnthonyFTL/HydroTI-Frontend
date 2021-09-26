import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";

import roleIrrigationChiefSVG from "../../../../assets/role-irrigation-chief.svg";
import roleIrrigationManagerSVG from "../../../../assets/role-irrigation-manager.svg";

import role from "../../../../model/role";

const useStyles = makeStyles({
  profileCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileCardText: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    height: 50,
    marginLeft: 20,
  },
});

const Profile = ({ username, userRole }) => {
  const styles = useStyles();

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileCardText}>
        <Typography variant="h6">{username}</Typography>
        <Typography variant="caption">
          {userRole === role.ROLE_IRRIGATION_CHIEF
            ? "Jefe de riego"
            : "Encargado de riego"}
        </Typography>
      </div>
      <img
        src={
          userRole === role.ROLE_IRRIGATION_CHIEF
            ? roleIrrigationChiefSVG
            : roleIrrigationManagerSVG
        }
        alt="profile role"
        className={styles.image}
      />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  userRole: PropTypes.oneOf(Object.values(role)).isRequired,
};

export default Profile;
