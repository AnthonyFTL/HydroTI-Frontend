import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Table from "../../components/Locations/Table";
import Filters from "../../components/Locations/Filters";
import Header from "../../components/Locations/Header";
import CreateDialog from "../../components/Locations/CreateDialog";

import Box from "@material-ui/core/Box";

import {
  changeFilterValue,
  getLocations,
  locationsResetState,
} from "../../store/actions/locations";

import Location from "../../model/location";
import routes from "../../router/routes";

const Locations = ({ data, filters, dispatch }) => {
  const history = useHistory();

  const [createFormIsOpen, setCreateFormIsOpen] = useState();

  useEffect(() => {
    dispatch(getLocations());
    return () => dispatch(locationsResetState());
  }, []);

  const onFilterValueChange = (value) => {
    dispatch(changeFilterValue(value));
    dispatch(getLocations());
  };

  return (
    <>
      <Header onAddClick={() => setCreateFormIsOpen(true)} />
      <Box marginY={3}>
        <Filters values={filters} onValueChange={onFilterValueChange} />
      </Box>
      <Table
        data={data}
        onDetailsClick={(id) => history.push(`${routes.LOCATIONS}/${id}`)}
      />
      <CreateDialog
        open={createFormIsOpen}
        onClose={() => setCreateFormIsOpen(false)}
        onCreate={(data) => console.log(data)}
      />
    </>
  );
};

Locations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Location)),
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Locations.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  data: state.locations.locations,
  filters: state.locations.filters,
});

export default connect(mapStateToProps)(Locations);
