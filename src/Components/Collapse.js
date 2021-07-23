import React from "react";
import PropTypes from "prop-types";

export default function Collapse(props) {
  return (
    <div>
      <p className="show" style={{backgroundColor:"#b0d17d"}}>
        Мы жили в деревне, перед окном у нас был луг, весь золотой от множества
        цветущих одуванчиков. Это было очень красиво. Все говорили: «Очень
        красиво! Луг золотой». Однажды я рано встал удить рыбу и заметил, что
        луг был не золотой, а зеленый
      </p>
      <span className="btn">
        {props.isExpanded ? (
          <div className="show">{props.children}</div>
        ) : (
          <div className="hide"></div>
        )}
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
