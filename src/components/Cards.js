import React, { Component } from "react";

import Avatar from "./Avatar";
import UserProfile from "./UserProfile";

class Cards extends Component {
  render() {
    const {user} = this.props;
    const name = `${user.first_name} ${user.last_name}`;
    return (
      <div key={user.id} id={`user-${user.id}`} className="cards">
        <Avatar name={name} img={user.avatar} />
        <UserProfile name={name} email={user.email} />
      </div>
    );
  }
}

export default Cards;