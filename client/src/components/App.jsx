import React from "react";
import axios from "axios";
import CreateNewCow from "./CreateNewCow";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      name: '',
      description: ''
    };
    //this.getCows = this.getCows.bind(this);
    this.create = this.create.bind(this)
  }

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

  create (name, description) {
    return axios.post('/api/cows', {name: name, description: description
    })
    .then(() => this.getCows()) //.then(this.getCows) ---> page needs to be refreshed
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <div>
          <CreateNewCow submitPost={this.create}/>
        </div>
        <div>
          <List cowsList={this.state.cows} />
        </div>
      </div>
    );
  }
}

export default App;
