import React from "react";
import "./App.css";

import CardList from "./components/cardList/cardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => this.setState({ monsters: json }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.monsters.map((monster, index) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
