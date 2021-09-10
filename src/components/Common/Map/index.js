import { Box, useTheme } from "@material-ui/core";

const Map = () => {
  const theme = useTheme();

  return (
    <Box height={300} style={{ backgroundColor: theme.palette.action.hover }} />
  );
};

export default Map;
