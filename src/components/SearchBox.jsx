import React from "react";

class SearchBox extends React.Component {
  render() {
    const { searchMovie } = this.props;
    return (
      <div className="searchBox">
        <input
          className="search"
          type="text"
          placeholder="Search for Movie Title ..."
          onChange={searchMovie}
        />
      </div>
    );
  }
}
export default SearchBox;
