import React, { Component } from "react";
import ReactGA from "react-ga";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

const Member = React.lazy(() => import("components/Member"));

function initializeReactGA() {
  ReactGA.initialize(process.env.REACT_APP_GA_ID);
  ReactGA.pageview("/Team");
}

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      maintainers: [],
    };
    this.generateTeam = this.generateTeam.bind(this);
    this.generateMaintainers = this.generateMaintainers.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/FreakyOS/packages_apps_Settings/still_alive/assets/freaky.json"
      )
      .then((response) => {
        this.setState({
          team: response.data.team,
          maintainers: response.data.maintainers,
        });
      });
  }
  generateCard(data) {
    return data.map((member, i) => {
      return (
        <Col
          xs="6"
          sm="4"
          md="3"
          lg="2"
          className="p-0"
          style={{ maxHeight: "340px", width: "auto" }}
        >
          <Member key={i} member={member} />
        </Col>
      );
    });
  }
  generateTeam() {
    return (
      <React.Fragment>
        <Row className="mx-auto justify-content-center">
          <h2>Team</h2>
        </Row>
        <Row className="mx-auto justify-content-center">
          {this.generateCard(this.state.team)}
        </Row>
      </React.Fragment>
    );
  }
  generateMaintainers() {
    return (
      <React.Fragment>
        <Row className="mx-auto justify-content-center">
          <h2>Maintainers</h2>
        </Row>
        <Row className="mx-auto justify-content-center">
          {this.generateCard(this.state.maintainers)}
        </Row>
      </React.Fragment>
    );
  }
  render() {
    initializeReactGA();
    return (
      <React.Fragment>
        <Container style={{ paddingTop: "60px" }}>
          {this.generateTeam()}
          {this.generateMaintainers()}
        </Container>
      </React.Fragment>
    );
  }
}
