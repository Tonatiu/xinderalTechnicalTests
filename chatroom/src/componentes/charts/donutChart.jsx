import React from 'react';
import * as d3 from 'd3';

class DonutChart extends React.Component{
    constructor(props){
        super(props);
        this.chartRef = React.createRef();
        this.concepto = props.concepto;
        this.colors = props.colors;
    }

    componentDidMount(){
        this.drawChart();
    }

    getData(){
        let data = [];
        this.concepto.cantidades.forEach(cantidad => {
            data.push({procedencia: cantidad.procedencia.descripcion, cantidad: cantidad.cantidad});
        });
        return data;
    }

    getTotal(){
        let total = 0;
        this.concepto.cantidades.forEach((cantidad, index) => {
            total += cantidad.cantidad;
        });
        return total;
    }

    /*componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
      
    rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }*/

    drawChart(){
        var data = this.getData();
        var color = d3.scaleOrdinal()
        .domain(data)
        .range(this.colors);
        
        var width = 250;
        var height = 250;
        var margin = 10;
        var radius = Math.min(width, height) / 2 - margin;
        
        var numberFormat = new Intl.NumberFormat('es-ES');
        if(this.concepto.tipo == 0){
            numberFormat = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
        }
        let refAccess = d3.select(this.chartRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        refAccess.append("text")
        .attr("text-anchor", "middle")
        .text(this.concepto.descripcion)
        .attr("fill", "#b0b0b0")
        .attr('dy', '-1em');
        refAccess.append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", "20px")
        .text(numberFormat.format(this.getTotal()));


        var pie = d3.pie()
        .value(function(d) {return d.value.cantidad; })
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
        .style("opacity", 0.7);
        var labels = d3.select(this.chartRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", 40)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 12 + ")");
        data.forEach((d, i) =>{
            var labelText = labels
            .append("text")
            .text(d.procedencia)
            .attr("fill", color(i.toString()))
            .attr("font-size", "20px");
            if(i <= 0){
                labelText.attr("dx", "-5em");
                
            }
        });
    }

    render(){
        return(
            <div ref={this.chartRef} style={{display:"grid"}}>
            </div>
        );
    }
}

export default DonutChart