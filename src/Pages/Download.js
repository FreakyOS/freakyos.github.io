import React, {Component} from 'react';
import { Row } from 'reactstrap';
import axios from 'axios';

const Card = React.lazy(() => import('../Components/Device'));

export default class Download extends Component{
    constructor(props){
        super(props);
        this.state = {
            deviceList : [] 
        }

        this.generatepage = this.generatepage.bind(this);
    }

    componentDidMount(){
        axios.get('/devices.json').then(response => {
            this.setState({
                deviceList : response.data.response
            })
        })
    }


    generatepage(){
        return this.state.deviceList.map(
            (object, i) => {
                return(
                        <Card key={i} device={object} />
                );
            }
        )
    }

    render(){
        return(
            <div>
                <Row>
                { this.generatepage() }
                </Row>
            </div>
        );
    }
}