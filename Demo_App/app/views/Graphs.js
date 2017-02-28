import React from 'react';
import Graphs from '../components/common/Charts';
class ChartGraph extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight"> <div className="row">
                <Graphs config={{ type: 'line', title: 'Report Chart' }} /></div></div>
        )
    }
}
export default ChartGraph;