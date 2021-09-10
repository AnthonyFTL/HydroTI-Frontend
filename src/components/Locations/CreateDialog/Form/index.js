import { useState } from "react";

import Box from "@material-ui/core/Box";

import OutlinedInput from "../../../Common/OutlinedInput";
import Map from "../../../Common/Map";
import PropTypes from "prop-types";

const Form = ({ id, onCreate }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name });
  };

  return (
    <form id={id} onSubmit={handleSubmit}>
      <Box marginBottom={2}>
        <OutlinedInput
          id="locations-create-form-dialog-name"
          helperTextId="locations-create-form-dialog-name-helper-text"
          label="Nombre"
          value={name}
          onChange={setName}
          fullWidth
        />
      </Box>
      <Map />
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  onCreate: PropTypes.func,
};

Form.defaultProps = {
  onCreate: () => {},
};

export default Form;
