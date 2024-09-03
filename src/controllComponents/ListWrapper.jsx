import { Children } from "react";
import PropTypes from "prop-types";

const ListWrapper = ({ children }) => {
  return (
    <ul>
      {Children.map(children, (chieldComponent) => (
        <li>{chieldComponent}</li>
      ))}
    </ul>
  );
};

ListWrapper.propTypes = {
  children: PropTypes.node,
};

export default ListWrapper;
