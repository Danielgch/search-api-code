/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from "react";
import PropTypes from "prop-types";
import CardItems from "./CardItems";
import api from "../api/services";
import { DebounceInput } from "react-debounce-input";

class Menu extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor() {
    super();
    this.state = {
      showingSearch: false,
      data: [],
      typing: ""
    };
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer(e) {
    e.preventDefault();
    this.setState({
      showingSearch: !this.state.showingSearch,
      data: [],
      typing: "",
      showAll: false
    });
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */

  async onSearch(e) {
    e.preventDefault();
    const typing  = e.target.value;

    if (!typing) return this.setState({ typing: "", data: [] });

    if (typing.length >= 3) {
      const data = await api.search(typing);
      return this.setState({ typing, data });
    }
    return this.setState({ typing, data: [] });
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    const { showingSearch, data, typing, showAll } = this.state;
    const onSeeAll = () => this.setState({ showAll: true });

    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <a href="#" className="nav-item">
                HOLIDAY
              </a>
              <a href="#" className="nav-item">
                WHAT'S NEW
              </a>
              <a href="#" className="nav-item">
                PRODUCTS
              </a>
              <a href="#" className="nav-item">
                BESTSELLERS
              </a>
              <a href="#" className="nav-item">
                GOODBYES
              </a>
              <a href="#" className="nav-item">
                STORES
              </a>
              <a href="#" className="nav-item">
                INSPIRATION
              </a>

              <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                <i className="material-icons search">search</i>
              </a>
            </nav>
          </div>
        </div>
        <div
          className={
            (this.state.showingSearch ? "showing " : "") + "search-container"
          }
        >
          <DebounceInput
            type="text"
            title="search input"
            value={typing}
            placeholder="Search"
            debounceTimeout={400}
            onChange={(e) => {
              this.onSearch(e);
            }}
          />
          <a href="#" onClick={(e) => this.showSearchContainer(e)}>
            <i className="material-icons close">close</i>
          </a>
        </div>
        <div>
          {/* NEW COMPONENT FOR DISPLAY ITEMS  */}
          <CardItems
            data={data}
            text={typing}
            close={showingSearch}
            showAll={showAll}
            onSeeAll={onSeeAll}
          />
        </div>
      </header>
    );
  }
}

Menu.propTypes = {
  showingSearch: PropTypes.bool,
  data: PropTypes.array,
  typing: PropTypes.string,
  showAll: PropTypes.bool,
  onSeeAll: PropTypes.func
};

// Export out the React Component
module.exports = Menu;
