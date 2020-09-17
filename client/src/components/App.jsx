import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
    };
    this.onTermSubmit = this.onTermSubmit.bind(this);
  }

  onTermSubmit(term) {}
  componentDidMount() {
    this.getCows();
  }
  getCows() {
    return axios
      .get("/api/cows")
      .then((response) => {
        this.setState({ cows: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div>
          {" "}
          <SearchBar onFormSubmit={this.onTermSubmit} />{" "}
        </div>
        <div>
          {" "}
          <List cowsList={this.state.cows} />{" "}
        </div>
      </div>
    );
  }
}

export default App;
