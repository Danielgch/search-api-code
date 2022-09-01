import React from "react";
import PropTypes from "prop-types";

/**
 * Item Component
 * component that showing each item from search
 * @param {item} param0 Each item that's get from CardItem Component
 * @returns
 */
function Item({ item }) {
  const { picture, name, price } = item;
  return (
    <div className="wrap__each-item">
      <img src={picture} alt={name} />
      <div className="body">
        <h3>
          <a>{name}</a>
          <div>${price}</div>
        </h3>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object
};

export default Item;
