import React from 'react';

class SearchBar extends React.Component {
  constructor (props) {
    super (props)
    this.state = {name: '', description: ''}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange (e) {
    console.log(e.target.value)
    this.setState({name: e.target.value, description: e.target.value})
  }

  onFormSubmit () {
  }




  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Cow's Name: </label>
          <input type="text" value={this.state.name} onChange={this.onInputChange}/>
          <label>Description: </label>
          <input type="text" value={this.state.description} />

          <button> Submit </button>
        </form>
      </div>
    )
  }
}

export default SearchBar;