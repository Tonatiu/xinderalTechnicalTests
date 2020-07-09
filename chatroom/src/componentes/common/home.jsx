import React from 'react';
import '../../css/home.css';
import DonutChart from '../charts/donutChart';
import axios from 'axios';
import * as webConfig from '../common/tools/webServiceConfig.js';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {rawData: []};
        this.colors = 
            [
                ["hsl(80, 100%, 50%)", "hsl(80, 100%, 28%)"], 
                ["hsl(190, 100%, 50%)", "hsl(190, 100%, 20%)"], 
                ["hsl(50, 100%, 50%)", "hsl(15, 100%, 45%)"]
            ];
    }

    componentDidMount(){
        axios
        .get(webConfig.SERVER_URL + webConfig.PETICIONES.GET_CONCEPTOS)
        .then(responce=>{
            this.setState({rawData: responce.data});
        })
        .catch(console.log("Error"));
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    {this.state.rawData.map((concepto, index) => (
                        <div className="col-sm-4 col-md-4">
                            <DonutChart colors={this.colors[index]} concepto={concepto}></DonutChart>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;