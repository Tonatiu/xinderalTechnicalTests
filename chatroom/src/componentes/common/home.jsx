import React from 'react';
import * as d3 from 'd3';
import '../../css/home.css';
import DonutChart from '../charts/donutChart';
import axios from 'axios';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4 col-md-4">
                        <DonutChart></DonutChart>
                    </div>
                    <div className="col-sm-4 col-md-4">
                        <DonutChart></DonutChart>
                    </div>
                    <div className="col-sm-4 col-md-4">
                        <DonutChart></DonutChart>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;