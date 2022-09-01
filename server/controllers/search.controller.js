const data = require("../data");

/**
 * Search Controller 
 * @param {*} req 
 * @param {*} res 
 * Here is filtering by active Records and the searching is using almost all the product properties
 */

const search = (req, res) => {
  const activeRecords = data.filter((dataEl) => dataEl.isActive === "true");
  const filterFn = (prop) =>
    new RegExp(`^.*${req.query.q.toLocaleLowerCase()}.*`).test(
      prop.toLocaleLowerCase()
    );

  const filtered = activeRecords.filter(
    ({ name, about, tags }) =>
      filterFn(name) || filterFn(about) || tags.some((tagEl) => filterFn(tagEl))
  );
  res.json(filtered);
};

module.exports = { search };
