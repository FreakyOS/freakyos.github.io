import React, { Component } from 'react';
import axios from 'axios';
import { Card, ModalBody, ModalFooter, ModalHeader, Button, Modal, CardFooter, Table, Container } from 'reactstrap';

export default class Device extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: {},
            changelog: `https://raw.githubusercontent.com/FreakyOS/ota_config/still_alive/${this.props.device.codename}/${this.props.device.codename}.txt`,
            isOpen: false,
        }

        this.toggle = this.toggle.bind(this);
        this.datetime = this.datetime.bind(this);
    }

    toggle() {
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
    }

    datetime() {
        let unix_timestamp = this.state.details.datetime
        var date = new Date(unix_timestamp * 1000);
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var formattedDate = day + '/' + month + '/' + year;
        return formattedDate;
    }

    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    componentDidMount() {
        axios
          .get(
            `https://raw.githubusercontent.com/FreakyOS/ota_config/still_alive/${this.props.device.codename}/${this.props.device.codename}.json`
          )
          .then((response) => {
            this.setState({
              details: response.data.response[0],
            });
          })
          .catch(() => {
            this.setState({
              details: {},
            });
          });
    }
    render() {
        return (
          <Container fluid className="h-100 w-100 p-1">
            <Card
              className="p-1 justify-content-center align-items-center"
              style={{ cursor: "pointer" }}
              onClick={this.toggle}
            >
              <img
                height="200px"
                className="p-1"
                style={{ maxWidth: "100%" }}
                src={this.props.device.image}
                alt={this.props.device.codename}
              />
              <CardFooter className="h-100 w-100 justify-content-center">
                {this.props.device.name}
              </CardFooter>
              <Modal
                isOpen={this.state.isOpen}
                toggle={this.toggle}
                centered
              >
                <ModalHeader toggle={this.toggle}>{this.props.device.name}</ModalHeader>
                <ModalBody>
                  <Table borderless={true}>
                    <tbody>
                      <tr>
                        <td>
                          <b>Brand</b>
                        </td>
                        <td>{this.props.device.brand}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Codename</b>
                        </td>
                        <td>{this.props.device.codename}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Maintainer</b>
                        </td>
                        <td>{this.props.device.maintainer}</td>
                      </tr>

                      <tr>
                        <td>
                          <b>Rom Version</b>
                        </td>
                        <td>{this.state.details.version}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Rom Size</b>
                        </td>
                        <td>{this.formatBytes(this.state.details.size)}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Build Date</b>
                        </td>
                        <td>{this.datetime()}</td>
                      </tr>
                    </tbody>
                  </Table>
                </ModalBody>
                <ModalFooter>
                  <Button
                    href={this.state.details.url}
                    target="_blank"
                    color="primary"
                    rel="noopener noreferrer"
                  >
                    Download
                  </Button>
                  <Button
                    href={this.state.changelog}
                    target="_blank"
                    color="info"
                    rel="noopener noreferrer"
                  >
                    Changelog
                  </Button>
                </ModalFooter>
              </Modal>
            </Card>
          </Container>
        );
    }
}


