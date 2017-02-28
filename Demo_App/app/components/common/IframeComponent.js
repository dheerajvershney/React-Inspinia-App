/*
 * Created by Dheeraj on 26/02/2017.
*/
import React, {Component} from 'react';
import Enums from './Enums';
let IframeComponent = React.createClass({
    componentDidMount: function () {
        $(parent.document).find("iframe").css("height", screen.height - 65 + "px");
        $(parent.document)
            .find("iframe").load(function () {
                swal.close();
            });
    },
    componentWillMount: function () {
        swal({
            title: 'Please wait',
            type: 'warning',
            showCancelButton: false,
            closeOnConfirm: false,
            showConfirmButton: false
        });
    },
    componentWillReceiveProps: function (newP) {
        var props = this.props;
        var ifr = $("#ifr" + this.props.iframeURL);
        if (ifr) {
            ifr.attr("src", ifr.attr("src"));
        }
    },
    componentDidUpdate: function () {
        $(parent.document).find("iframe").css("height", screen.height - 65 + "px");
        $(parent.document)
            .find("iframe").load(function () {
                swal.close();
            });
    },
    render: function () {
        if (navigator.onLine) {
            return (<iframe id={"ifr"}  scrolling="auto" src={this.props.iframeURL}
                allowTransparency="false" frameBorder="0" ></iframe>);
        }
        swal.close();
        swal(Enums.networkAlertText, Enums.networkErrorMessage);
        return (null);
    }
});

export default IframeComponent;

