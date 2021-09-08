import PropTypes from "prop-types";

import MuiList from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const List = ({ options }) => {
  return (
    <MuiList>
      {options.map(({ isActive, icon, text, onClick }) => (
        <ListItem button key={text} selected={isActive} onClick={onClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </MuiList>
  );
};

List.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool.isRequired,
      icon: PropTypes.node.isRequired,
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
};

List.defaultProps = {
  options: [],
};

export default List;
