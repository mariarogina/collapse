import React from "react";
import PropTypes from "prop-types";

export default function Collapse(props) {
  return (
    <div>
      <span>
        {props.isExpanded ? props.children : ""}
        {props.isExpanded ? (
          <a
            style={{ color: "red", fontSize: "1.8rem" }}
            onClick={() => props.onExpandedChange()}
          >
            {props.expandedLabel}
          </a>
        ) : (
          <a
            style={{ color: "green", fontSize: "1.8rem" }}
            onClick={() => props.onExpandedChange()}
          >
            {props.collapsedLabel}
          </a>
        )}
      </span>
    </div>
  );
}

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  isExpanded: PropTypes.bool,
  onExpandedChange: PropTypes.func,
};

Collapse.defaultProps = {
  collapsedLabel: "Развернуть",
  expandedLabel: "Свернуть",
  isExpanded: true,
  onExpandedChange: () => {},
};
