import PropTypes from "prop-types";

import authBackground from "../../../../assets/auth-background.jpg";

const AuthPageTemplate = ({ children }) => (
  <div
    style={{
      backgroundImage: `url(${authBackground})`,
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
  >
    {children}
  </div>
);

AuthPageTemplate.propTypes = {
  children: PropTypes.node,
};

AuthPageTemplate.defaultProps = {
  children: null,
};

export default AuthPageTemplate;
