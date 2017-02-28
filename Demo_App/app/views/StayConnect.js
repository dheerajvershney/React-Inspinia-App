import React, {Component} from 'react';
let Blogs = React.createClass({
    componentDidMount: function () {
        FB.XFBML.parse()
    },
    render: function () {
        return (<div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <div className="col-lg-12">
                    <div className="fb-comments"  data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"></div>
                </div>
            </div>
        </div>);

    }
});
export default Blogs;

