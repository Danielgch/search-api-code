import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";
import Results from "./Results";

/**
 * CardItems Component
 * Component to show the complete card with each items
 * @param {data} param0 data to map
 * @param {close} param1 when is close de searching this close the searching
 * @param {text} param2 text typing in the search box
 * @param {showAll} param3  button that show all results - flag
 * @param {onSeeAll} param4  function that is used in the main component to change the flag showall
 * @returns Results and each Item
 */

function CardItems({ data, text, close, showAll, onSeeAll }) {
  const results = showAll ? data : data.slice(0, 4);

  return (
    <>
      {close && (
        <div className="items">
          {text.length >= 3 && (
            <Results data={data} showAll={showAll} onSeeAll={onSeeAll} />
          )}
          {!!data.length &&
            results.map((searchEl) => (
              <div key={searchEl._id} className="items__wrap">
                <Item item={searchEl} />
              </div>
            ))}
        </div>
      )}
    </>
  );
}

CardItems.propTypes = {
  close: PropTypes.bool,
  data: PropTypes.array,
  text: PropTypes.string,
  showAll: PropTypes.bool,
  onSeeAll: PropTypes.func
};

export default CardItems;
