
import ReactDOM from 'react-dom';
import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';
import ReactDom from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from './config/routes';
import { Router,  hashHistory } from 'react-router'
import configureStore from './configStore'
const store = configureStore()
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css'

export default class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={hashHistory} routes={Routes} />
            </Provider>
        )
    }
} ReactDom.render(
    <Root store={store} />,
    document.getElementById('root')
)