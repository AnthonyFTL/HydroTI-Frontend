import PropTypes from "prop-types";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInputMUI from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";

const OutlinedInput = ({
  id,
  helperTextId,
  label,
  hasError,
  errorMessage,
  size,
  fullWidth,
  onChange,
  ...rest
}) => (
  <FormControl
    error={hasError}
    variant="outlined"
    size={size}
    fullWidth={fullWidth}
  >
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <OutlinedInputMUI
      id={id}
      label={label}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
    {hasError && (
      <FormHelperText id={helperTextId}>{errorMessage}</FormHelperText>
    )}
  </FormControl>
);

OutlinedInput.propTypes = {
  id: PropTypes.string.isRequired,
  helperTextId: PropTypes.string,
  label: PropTypes.string,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
};

OutlinedInput.defaultProps = {
  helperTextId: "",
  label: "",
  hasError: false,
  errorMessage: "",
  size: "small",
  fullWidth: false,
  onChange: () => {},
};

export default OutlinedInput;
