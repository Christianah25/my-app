import React, { Component } from "react";
import uparrow from "./images/uparrow.png";
import downarrow from "./images/downarrow.png";

export default class MovieCard extends Component {
  render() {
    const listItems = this.props.movies.map((movie) => (
      <div className="movieCard">
        <div className="row">
          <div className="counter">
            <button onClick={this.addOne}>
              <img src={uparrow} alt="Up" />
            </button>
            <p>{movie[2]}</p>
            <button onClick={this.minusOne}>
              <img src={downarrow} alt="Down" />
            </button>
          </div>
          <div className="text">
            <h3>{movie[0]}</h3>
            <p>{movie[1]}</p>
          </div>
        </div>
      </div>
    ));
    return <div>{listItems}</div>;
  }
}
