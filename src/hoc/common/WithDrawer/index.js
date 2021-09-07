import PropTypes from "prop-types";

import Drawer from "../../../components/Common/Drawer";

const WithDrawer = () => (
  <>
    <Drawer options={[]} active="" />
  </>
);

WithDrawer.propTypes = {
  children: PropTypes.node,
};

export default WithDrawer;
