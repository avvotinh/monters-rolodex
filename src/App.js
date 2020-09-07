import React, { Component } from "react";
import { CardList } from "./components/CardList/CardList";
import { SearchField } from "./components/SearchField/SearchField";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters }));
  }

  searchMonsterHandler = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const monstersFiltered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchField
          placeholder="search monsters"
          handleChange={this.searchMonsterHandler}
        />
        <CardList monsters={monstersFiltered} />
      </div>
    );
  }
}

export default App;
