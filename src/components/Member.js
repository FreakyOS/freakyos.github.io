import React, { Component } from "react";
import { Container, Card, CardFooter } from "reactstrap";

export default class Member extends Component {
    render(){
        return (
          <React.Fragment>
            <Container fluid className="h-100 w-100 p-1">
               <Card
                  className="p-1 h-100 justify-content-center align-items-center"
                  style={{ cursor: "pointer" }}
                  onClick={this.toggle}
                >
                <img
                  height="200px"
                  className="p-1"
                  style={{ maxWidth: "100%" }}
                  src={this.props.member.avatar}
                  alt={this.props.member.name}
                />
                <CardFooter fluid className="h-100 w-100 justify-content-center">
                  {this.props.member.name} /{" "}
                        {!this.props.member.role
                          ? this.props.member.device
                          : this.props.member.role}
                  </CardFooter>
                </Card>
              </Container>
          </React.Fragment>
        );
    }
}