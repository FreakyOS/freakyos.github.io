import React, {Component} from 'react';
import axios from 'axios';
import {Card, CardBody, ModalBody, ModalFooter, ModalHeader, Button, Modal, CardImg, CardFooter, Table} from 'reactstrap';


export default class Device extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            details: {},
            changelog: `https://raw.githubusercontent.com/FreakyOS/ota_config/still_alive/${this.props.device.codename}/${this.props.device.codename}.txt`,
            isOpen : false,
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
          isOpen: !state.isOpen
        }));
      }
      
    componentDidMount(){
        // console.log(this.props.device)
        axios.get(`/${this.props.device.codename}/${this.props.device.codename}.json`).then(
            (response) => {
                this.setState({
                  details: response.data.response[0]
                });
            }
        )
    }
    render(){
        return(
                <Card className="box"  style={{ width:'15rem' , cursor: 'pointer'}} onClick={this.toggle}>
                    <CardBody>
                        <CardImg top width="100%" src={this.props.device.image} alt="Device Image" />
                    </CardBody>
                    <CardFooter><center>{this.props.device.name}</center></CardFooter>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} centered responsive>
                    <ModalHeader>
                        {this.props.device.name}
                    </ModalHeader>
                    <ModalBody>
                        <Table borderless={true}>
                            <tr>
                                <td>
                                    <b>Brand</b>
                                </td>
                                <td>
                                    {this.props.device.brand}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Codename</b>
                                </td>
                                <td>
                                    {this.props.device.codename}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Maintainer</b>
                                </td>
                                <td>
                                    {this.props.device.maintainer}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <b>Rom Version</b>
                                </td>
                                <td>
                                    {this.state.details.version}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Rom Size</b>
                                </td>
                                <td>
                                    {Math.trunc(this.state.details.size / 1048576)} MB
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Build Date</b>
                                </td>
                                <td>
                                    xxx
                                </td>
                            </tr>
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
        );
    }
}


