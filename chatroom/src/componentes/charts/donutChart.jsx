import React from 'react';
import * as d3 from 'd3';

class DonutChart extends React.Component{
    constructor(props){
        super(props);
        this.chartRef = React.createRef();
        this.concepto = props.concepto;
    }

    componentDidMount(){
        this.drawChart();
    }

    drawChart(){
        var data = {a: 9, b: 20}
        var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#98abff", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);
        
        var width = 250
        var height = 250
        var margin = 10;
        var radius = Math.min(width, height) / 2 - margin

        let refAccess = d3.select(this.chartRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        refAccess.append("text")
        .attr("text-anchor", "middle")
        .text("Hola mundo")
        .attr("fill", "#b0b0b0")
        .attr('dy', '-1em');
        refAccess.append("text")
        .attr("text-anchor", "middle")
        .text("Hola mundo2");


        var pie = d3.pie()
        .value(function(d) {return d.value; })
        var data_ready = pie(d3.entries(data));

        refAccess.selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
          .innerRadius(100)
          .outerRadius(radius)
        )
        .attr('fill', function(d){ return(color(d.data.key)) })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7);
    }

    render(){
        return(
            <div ref={this.chartRef}></div>
        );
    }
}

export default DonutChart