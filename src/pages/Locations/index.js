import Table from "../../components/Locations/Table";

import Location from "../../model/Location";
import locationState from "../../model/state";

const Locations = () => {
  const data = [
    new Location(
      1,
      "location 1",
      "loc. district 1",
      locationState.SUSPENDED,
      "loc. connected devices 1"
    ),
    new Location(
      2,
      "location 2",
      "loc. district 2",
      locationState.DISCONNECTED,
      "loc. connected devices 2"
    ),
    new Location(
      3,
      "location 3",
      "loc. district 3",
      locationState.ACTIVE,
      "loc. connected devices 3"
    ),
  ];

  return <Table data={data} />;
};

export default Locations;
