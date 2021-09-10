import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";

const Details = ({ location, district, lastTime }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} xl={4}>
          <Typography variant="body1" color="secondary">
            Localización:
          </Typography>
          <Typography variant="body1">{location}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <Typography variant="body1" color="secondary">
            Distrito:
          </Typography>
          <Typography variant="body1">{district}</Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant="body1" color="secondary">
            Regado por última vez:
          </Typography>
          <Typography variant="body1">{lastTime}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

Details.propTypes = {
  location: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  lastTime: PropTypes.string.isRequired,
};

export default Details;
