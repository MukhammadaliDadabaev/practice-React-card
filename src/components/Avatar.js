import React, { Component } from 'react';

class Avatar extends Component {
  render() {
		const {name, img} = this.props;
    return (
      <div>
        <img src={img}  alt={name} /> 
      </div>
    );
  }
}

export default Avatar;