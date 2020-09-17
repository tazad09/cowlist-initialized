import React from 'react';

class CreateNewCow extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      name: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }


  handleSubmit (e) {
    e.preventDefault()
    if(this.state.name && this.state.description) {
      this.props.submitPost(this.state.name, this.state.description)
    } else {
      alert('Please fill out both fields!')
    }
  }


  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Cow's Name: </label>
          <input name="name" type="text" value={this.state.value} onChange={this.handleChange}/>
          <br></br>
          <label>Description: </label>
          <textarea name="description" type="text" value={this.state.value} onChange={this.handleChange}/>
          <br></br>
          <button > Submit </button>
        </form>
      </div>
    )
  }
}

export default CreateNewCow;