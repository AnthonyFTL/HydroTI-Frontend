import {useEffect, useState} from "react";
import Header from "../../components/Irrigations/Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { irrigationsResetState } from "../../store/actions/irrigations";

import useIotData from "../../hooks/useIotData";

import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@material-ui/core";
import DataService from "../../services/dataService";
import Confirmation from "../../components/Common/Confirmation";

const Irrigations = ({ dispatch }) => {
  const iotData = useIotData();
  const [irrigationConfirmationIsOpen, setIrrigationConfirmationIsOpen] = useState(false);
  const [toggleOnOffConfirmationIsOpen, setToggleOnOffConfirmationIsOpen] = useState(false);
  const [switchChangeEvent, setSwitchChangeEvent] = useState();

  useEffect(() => {
    return () => dispatch(irrigationsResetState());
  });

  const onPowerClick = () => DataService.switchPumpValue().then(() => {});

  const setIrrigationType = () =>
    DataService.changeIrrigationType().then(() => {});

  return (
    iotData && (
      <>
        <Header />
        <Box marginTop={3}>
          <Box display="flex" justifyContent="space-between">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={iotData.manualIrrigation}
                    onChange={(e) => {
                        setIrrigationConfirmationIsOpen(true);
                        setSwitchChangeEvent(e.target.checked);
                    } }
                  />
                }
                label={
                  iotData.manualIrrigation ? "Riego manual" : "Riego automático"
                }
              />
            </FormGroup>
            {iotData.manualIrrigation && (
              <IconButton onClick={() => {
                  setToggleOnOffConfirmationIsOpen(true);
              }}>
                {iotData.pump === "ON" ? "Apagar" : "Encender"}
                <PowerSettingsNewIcon />
              </IconButton>
            )}
          </Box>
          {iotData && (
            <Box marginTop={5}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} xl={4}>
                  <Typography variant="body1" color="secondary">
                    Humedad del suelo:
                  </Typography>
                  <Typography variant="body1">{iotData.moisture} %</Typography>
                </Grid>
                <Grid item xs={12} sm={6} xl={4}>
                  <Typography variant="body1" color="secondary">
                    Temperatura:
                  </Typography>
                  <Typography variant="body1">
                    {iotData.temperature} °C
                  </Typography>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <Typography variant="body1" color="secondary">
                    Nivel de humedad:
                  </Typography>
                  <Typography variant="body1">{iotData.humidity} %</Typography>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <Typography variant="body1" color="secondary">
                    Consumo de agua:
                  </Typography>
                  <Typography variant="body1">
                    {iotData.waterConsumption} ml
                  </Typography>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <Typography variant="body1" color="secondary">
                    Nivel de luz:
                  </Typography>
                  <Typography variant="body1">{iotData.lights}</Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
        <Confirmation
            text="¿Está seguro que desea cambiar el modo de riego?"
            title="Cambiar modo de riego"
            open={irrigationConfirmationIsOpen}
            onClose={() => setIrrigationConfirmationIsOpen(false)}
            onConfirm={() => {
                setIrrigationType(switchChangeEvent).then(() => {
                    setIrrigationConfirmationIsOpen(false);
                })
            }}
        />
          <Confirmation
              text="¿Está seguro que desea cambiar el estado del dispositivo?"
              title="Cambiar estado del dispositivo"
              open={toggleOnOffConfirmationIsOpen}
              onClose={() => setToggleOnOffConfirmationIsOpen(false)}
              onConfirm={() => {
                  onPowerClick().then(() => {
                      setToggleOnOffConfirmationIsOpen(false);
                  });
              }}
          />
      </>
    )
  );
};

Irrigations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Location)),
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Irrigations.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  data: state.irrigations.irrigations,
  filters: state.irrigations.filters,
});

export default connect(mapStateToProps)(Irrigations);
