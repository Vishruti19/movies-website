import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movieDetails, showTitle, hideTitle } = this.props;

    return (
      <div className="card">
        <img
          src={movieDetails.Poster}
          alt="img"
          className="posterImg"
          onMouseOver={showTitle}
          onMouseOut={hideTitle}
        />
        <p> {movieDetails.Title}</p>
      </div>
    );
  }
}

export default MovieCard;
