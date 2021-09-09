import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    Person: {
      fullName: "Wael Oueslati",
      bio: "I AM",
      imgSrc:
        "https://s3.gaming-cdn.com/images/products/6215/orig/jeu-steam-the-last-of-us-part-ii-cover.jpg",
      profession: "Student",
    },
    show: false,
  };
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="The last of us"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}
