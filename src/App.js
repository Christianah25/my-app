import React, { Component } from "react";
import MovieCard from "./MovieCard.js";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      // movie: "Harry Potter",
      movies: [
        [
          "Harry Potter",
          "this is the description for harry potter, wizards and stuff",
          4,
        ],
        ["Avenger", "this is the description for avenger", 5],
        ["Star Wars", " this is the description for star wars= spaceships!", 2],
      ],
    };
  }
  addOne = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  minusOne = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    const movies = this.state.movies;
    return (
      <div className="App">
        <h1>MOVIE RATING APP</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.addOne}>+1</button>
        <MovieCard movies={movies} />
      </div>
    );
  }
}
