import PropTypes from "prop-types";

import authBackground from "../../../assets/auth-background.jpg";

const AuthTemplate = ({ children }) => (
  <div
    style={{
      backgroundImage: `url(${authBackground})`,
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

AuthTemplate.propTypes = {
  children: PropTypes.node,
};

AuthTemplate.defaultProps = {
  children: null,
};

export default AuthTemplate;
