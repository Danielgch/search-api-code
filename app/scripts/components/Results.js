import React from "react";
import PropTypes from "prop-types";

/**
 * Results component
 * LABEL TO SHOW THE RESULTS
 * @param {data} param0 Data for do the counting
 * @param {showAll} param1 flag to show more results
 * @param {onSeeAll} param2  function to change showAll flag
 * @returns displaying results
 */

function Results({ data, showAll, onSeeAll }) {
  const count = data.length > 4 ? "4" : data.length;

  return (
    <>
      {data.length > 0 ? (
        <div className="items__results" aria-live="assertive">
          <a>
            <span>
              DISPLAYING {count} OF {data.length} RESULTS{" "}
            </span>
            {data.length > 4 && !showAll && (
              <button onClick={onSeeAll}> SEE ALL RESULTS </button>
            )}
          </a>
        </div>
      ) : (
        <div className="items__results" aria-live="assertive">
          <a>
            <span>NO RESULTS FOUND</span>
          </a>
        </div>
      )}
    </>
  );
}

Results.propTypes = {
  data: PropTypes.array,
  showAll: PropTypes.bool,
  onSeeAll: PropTypes.func
};

export default Results;
