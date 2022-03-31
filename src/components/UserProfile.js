import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
		const {name, email} = this.props; 
    return (
      <div>
        <h2>{name}</h2>  
				<h3>
					<a href={`mailto:${email}`}>{name}</a>
				</h3>     
      </div>
    );
  }
}

export default UserProfile;