import React from "react";
import "./App.css";

import CardList from "./components/cardList/cardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
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
        <input
          type="search"
          placeholder="Search robots"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
