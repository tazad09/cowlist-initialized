import React from 'react';

class CowDetail extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      showDescription: false
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete (e) {
    //console.log(this.props.cow.id)
    this.props.onClick(this.props.cow.id)

  }

  render () {
    return (
      <li>
        <div>
          <div onClick={() => this.setState({showDescription: !this.state.showDescription})}> {this.props.cow.name}</div>
          <div className='cow-description'>
            {this.state.showDescription ? <div className='cow-description'>{this.props.cow.description}</div> : null}

          </div>
          <button onClick={this.handleDelete}> Delete this cow </button>
        </div>
      </li>
    )
  }

}

export default CowDetail;