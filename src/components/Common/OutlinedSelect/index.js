import PropTypes from "prop-types";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

const OutlinedSelect = ({
  id,
  helperTextId,
  labelId,
  label,
  hasError,
  errorMessage,
  size,
  fullWidth,
  onChange,
  options,
  ...rest
}) => (
  <FormControl
    error={hasError}
    variant="outlined"
    size={size}
    fullWidth={fullWidth}
  >
    <InputLabel htmlFor={id} id={labelId}>
      {label}
    </InputLabel>
    <Select
      labelId={labelId}
      label={label}
      id={id}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    >
      <MenuItem value="">Seleccione una opción</MenuItem>
      {options.map(({ value, label }) => (
        <MenuItem value={value} key={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
    {hasError && (
      <FormHelperText id={helperTextId}>{errorMessage}</FormHelperText>
    )}
  </FormControl>
);

OutlinedSelect.propTypes = {
  id: PropTypes.string.isRequired,
  helperTextId: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  label: PropTypes.string,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

OutlinedSelect.defaultProps = {
  label: "",
  hasError: false,
  errorMessage: "",
  size: "small",
  fullWidth: false,
  onChange: () => {},
  options: [],
};

export default OutlinedSelect;
