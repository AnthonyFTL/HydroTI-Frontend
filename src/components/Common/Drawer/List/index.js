import PropTypes from "prop-types";

import MuiList from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const List = ({ options, active, onItemClick }) => {
  return (
    <MuiList>
      {options.map(({ icon, text }) => (
        <ListItem
          button
          key={text}
          selected={active === text}
          onClick={() => onItemClick(text)}
        >
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
      icon: PropTypes.node.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  active: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

List.defaultProps = {
  options: [],
};

export default List;
