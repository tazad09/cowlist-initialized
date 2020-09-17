import React from 'react';

class CowDetail extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      showDescription: false
    }
  }



  render () {
    return (
      <div>
        <div>
          <div onClick={() => this.setState({showDescription: !this.state.showDescription})}> {this.props.cow.name}</div>
          <div className='cow-description'>
            {this.state.showDescription ? <div className='cow-description'>{this.props.cow.description}</div> : null}
          </div>
        </div>
      </div>
    )
  }

}

export default CowDetail;