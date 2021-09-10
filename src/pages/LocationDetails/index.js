import { useHistory, useParams } from "react-router-dom";

import Box from "@material-ui/core/Box";

import Header from "../../components/LocationDetails/Header";
import Body from "../../components/LocationDetails/Body";

const LocationDetails = () => {
  const history = useHistory();
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <Box marginBottom={5}>
        <Header onArrowBackClick={() => history.goBack()} title="Título" />
      </Box>
      <Body />
    </>
  );
};

export default LocationDetails;
