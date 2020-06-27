import React, { Component } from 'react';
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    Button, CardHeader, CardFooter
} from 'reactstrap';

class MobileCardDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            details: {},
            changelog: `https://raw.githubusercontent.com/FreakyOS/ota_config/still_alive/${this.props.device.codename}/${this.props.device.codename}.txt`
        }
    }
    
    componentDidMount(){
        axios.get(`/${this.props.device.codename}/${this.props.device.codename}.json`).then(
            (response) => {
                this.setState({
                  details: response.data.response[0]
                });
            }
        )
    }

    render(){
        return (
          <React.Fragment>
            <Card>
              <CardHeader>{this.props.device.name}</CardHeader>
              <CardImg
                top
                width="100%"
                src={this.props.device.image}
                alt="Device Image"
              />
              <CardBody>
                <CardText>
                  <b>Codename:</b> {this.props.device.codename}
                </CardText>
                <CardText>Maintainer: {this.props.device.maintainer}</CardText>
                <CardText>Filename: {this.state.details.filename}</CardText>
                <CardText>Version: {this.state.details.version}</CardText>
              </CardBody>
              <CardFooter>
                <Button
                  href={this.state.details.url}
                  target="_blank"
                  color="primary"
                  rel="noopener noreferrer"
                >
                  Download
                </Button>
                &nbsp; &nbsp;
                <Button
                  href={this.state.changelog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Changelog
                </Button>
              </CardFooter>
            </Card>
          </React.Fragment>
        );
    }
}

export default class MobileCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            deviceList : []
        }
        this.generateList  = this.generateList.bind(this);
    }
    componentDidMount(){
        axios.get('/devices.json').then(response => {
            this.setState({
                deviceList : response.data.response
            })
        })
    }
    
    generateList(){
        return this.state.deviceList.map(
            (object, i) => {
                return(
                    <MobileCardDetail key={i} device={object}/>
                );
            }
        )
    }

    render(){
        return(
            <React.Fragment>
                { this.generateList() }
            </React.Fragment>
        );
    }
}