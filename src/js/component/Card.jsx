import React, { Component } from "react";

export default class card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card__img"></div>
        <h3 className="card__title">equilibrium #3429</h3>

        <p className="card__desc">
          Our equilibrium collection promotes balance and calm
        </p>
        <div className="card__price">
          <p className="card__price--element1">
            <p></p>0.041ETH
          </p>
          <p className="card__price--element2">
            <p></p>3 days left
          </p>
        </div>
        <p className="card__hr"></p>
        <div className="card__client">
          <p></p>
          <div className="ok">
            <span>creation of</span>
            jules wyvern
          </div>
        </div>
      </div>
    );
  }
}
