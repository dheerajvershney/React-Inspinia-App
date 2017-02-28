import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';
import configureStore from '../../configStore'
const store = configureStore()
class Navigation extends Component {
    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }
    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <ul className="nav metismenu" id="side-menu" ref="menu">
                    <li className="nav-header">
                        <div className="dropdown profile-element"> <span>
                        </span>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{'Welcome '+ localStorage.getItem('username') }</strong>
                                </span> <span className="text-muted text-xs block">Developer<b className="caret"></b></span> </span> </a>
                            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a href="#"> Logout</a></li>
                            </ul>
                        </div>
                        <div className="logo-element">
                            DEMO
                        </div>
                    </li>
                    <li className={this.activeRoute("/main") }>
                        <Link to="/main"><i className="fa fa-th-large"></i> <span className="nav-label">Home</span></Link>
                    </li>
                    <li className={this.activeRoute("/reports") }>
                        
                    </li>
                     <li className={this.activeRoute("/reports") }>
                   <Link to="/reports"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Reports<b className="caret"></b></span></Link>
                    <ul className="nav nav-second-level collapse">
                         <li className={this.activeRoute("/reports/gridItems") }>
                        <Link to="/reports/gridItems"><i className="fa fa-laptop"></i> <span className="nav-label">Grid Items</span></Link>
                    </li>
                     <li className={this.activeRoute("/reports/tableItems") }>
                        <Link to="/reports/tableItems"><i className="fa fa-table"></i> <span className="nav-label">Table Items</span></Link>
                    </li>
                     <li className={this.activeRoute("/reports/graphs") }>
                        <Link to="/reports/graphs"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Graphs</span></Link>
                    </li>
                    </ul>
                </li>
                    <li className={this.activeRoute("/productsPage") }>
                        <Link to="/productsPage"><i className="fa fa-pie-chart"></i> <span className="nav-label">Products page</span></Link>
                    </li>
                    <li className={this.activeRoute("/serviceSupport ") }>
                        <Link to="/serviceSupport"><i className="fa fa-support"></i> <span className="nav-label">Service Support</span></Link>
                    </li>
                    <li className={this.activeRoute("/dealerOperations") }>
                        <Link to="/dealerOperations"><i className="fa fa-flask"></i> <span className="nav-label">Dealer Operations</span></Link>
                    </li>
                    <li className={this.activeRoute("/complaintHandling") }>
                        <Link to="/complaintHandling"><i className="fa fa-files-o"></i> <span className="nav-label">Complaint Handling</span></Link>
                    </li>
                     <li className={this.activeRoute("/education") }>
                        <Link to="/education"><i className="fa fa-book"></i> <span className="nav-label">Education</span></Link>
                    </li>
                     <li className={this.activeRoute("/WhatsIsnews") }>
                        <Link to="/WhatsIsnews"><i className="fa fa-info"></i> <span className="nav-label">Whats's New</span></Link>
                    </li>
                     <li className={this.activeRoute("/stayConnected") }>
                        <Link to="/stayConnected"><i className="fa fa-globe"></i> <span className="nav-label">Stay Connected</span></Link>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Navigation