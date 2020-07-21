import React, {Component} from 'react';
import { Row } from 'reactstrap';
import axios from 'axios';
import ReactGA from 'react-ga';
const MobileCard = React.lazy(() => import('../Components/Device'));


function initializeReactGA() {
	ReactGA.initialize(process.env.REACT_APP_GA_ID);
	ReactGA.pageview('/downloads');
}

export default class Download extends Component{
    constructor(props){
        super(props);
        this.state = {
            groupByBrand : {}
        }

        this.generatepage = this.generatepage.bind(this);
        this.groupBy = this.groupBy.bind(this);
        this.generatebrand = this.generatebrand.bind(this); 
    }

    groupBy(xs, key){
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }

    componentDidMount(){
        axios.get('/devices.json').then(response => {
            this.setState({
                groupByBrand: this.groupBy(response.data.response, 'brand'),
            })
        })
    }

    generatebrand(brandlist){
        return brandlist.map((device, i) => {
            return(
                <React.Fragment>
                    <MobileCard key={i} device={device} />
                </React.Fragment>
            );
        })
    }

    generatepage(){
        return Object.entries(this.state.groupByBrand).map((brand)=>{
            return(
            <div>
                <Row>
                    <h2>
                        {brand[0]}
                    </h2>
                </Row>
                <Row>
                    {this.generatebrand(brand[1])}
                </Row>
            </div>
            );
        });
    }

    render(){
        initializeReactGA();
        return(
            <div>
                { this.generatepage() }
            </div>
        );
    }
}