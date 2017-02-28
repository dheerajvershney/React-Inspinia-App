import React from 'react';
var ReactHighcharts = require('react-highcharts');
var config = {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
};
class ChartGraph extends React.Component {
    constructor() {
        super();
    }
    render() {
        var chartConfig = config;
        chartConfig.chart = { type: this.props.config.type || 'line' }
        chartConfig.title = { text: this.props.config.title }

        return (<div className="col-lg-12">
            <ReactHighcharts config={chartConfig }/></div>
        )
    }
}

export default ChartGraph;