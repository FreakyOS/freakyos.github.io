import React, { Component } from "react";

export default class Member extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='freaky-card' onClick={this.toggle}>
          <img src={this.props.member.avatar} alt={this.props.member.name} />
          <div fluid className="freaky-card-footer">
            {this.props.member.name} |{" "}
            {!this.props.member.role
              ? this.props.member.device
              : this.props.member.role}
          </div>
        </div>
      </React.Fragment>
    );
  }
}