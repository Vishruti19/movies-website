import "./App.css";
import React from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import MovieCard from "./components/MovieCard";

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      moviesData: [],
    };
  }

  getData = async () => {
    return await axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war");
  };

  componentDidMount() {
    const res = this.getData();
    res.then((response) => {
      this.setState({
        moviesData: response.data.Search,
      });
    });
  }

  searchMovie = (e) => {
    const cards = document.querySelectorAll(".card");
    for (let card of cards) {
      if (
        card
          .querySelector("p")
          .textContent.toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        if (Object.values(card.classList).includes("hide-card")) {
          card.classList.remove("hide-card");
        }
      } else {
        if (!Object.values(card.classList).includes("hide-card")) {
          card.classList.add("hide-card");
        }
      }
    }
  };

  showTitle = (e) => {
    e.target.nextElementSibling.classList.add("show-title");
  };

  hideTitle = (e) => {
    e.target.nextElementSibling.classList.remove("show-title");
  };

  render() {
    return (
      <>
        <SearchBox searchMovie={this.searchMovie} />
        <div className="container">
          {this.state.moviesData.map((data) => (
            <MovieCard
              movieDetails={data}
              showTitle={this.showTitle}
              hideTitle={this.hideTitle}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
