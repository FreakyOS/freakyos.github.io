import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import axios from 'axios';
import ReactGA from 'react-ga';
const MobileCard = React.lazy(() => import('components/Device'));


function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    ReactGA.pageview('/downloads');
}

export default class Download extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupByBrand: {}
        }

        this.generatepage = this.generatepage.bind(this);
        this.groupBy = this.groupBy.bind(this);
        this.generatebrand = this.generatebrand.bind(this);
    }

    groupBy(xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }

    componentDidMount() {
        axios
          .get(
            "https://raw.githubusercontent.com/FreakyOS/ota_config/still_alive/devices.json"
          )
          .then((response) => {
            this.setState({
              groupByBrand: this.groupBy(response.data.response, "brand"),
            });
          });
    }

    generatebrand(brandlist) {
        return brandlist.map((device, i) => {
            return (
                <React.Fragment>
                    <Col xs='6' sm='4' md='3' lg='2' className='p-0' style={{ maxHeight: '340px', width: 'auto' }}>
                        <MobileCard key={i} device={device} />
                    </Col>
                </React.Fragment>
            );
        })
    }

    generatepage() {
        return Object.entries(this.state.groupByBrand).map((brand) => {
            return (
                <React.Fragment>
                    <Row className="mx-auto justify-content-center">
                        <h2>
                            {brand[0]}
                        </h2>
                    </Row>
                    <Row className="mx-auto justify-content-center">
                        {this.generatebrand(brand[1])}
                    </Row>
                </React.Fragment>
            );
        });
    }

    render() {
        initializeReactGA();
        return (
            <React.Fragment>
                <Container style={{paddingTop:'60px'}}>
                    {this.generatepage()}
                </Container>
            </React.Fragment>
        );
    }
}