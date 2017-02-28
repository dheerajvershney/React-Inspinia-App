/**
 * Created by DCPL on 6/10/16.
*/
import React, {Component} from 'react';

import IframeLoader from '../components/common/IframeComponent';

let DealerOperations = React.createClass({
  render: function () {
    return (<IframeLoader iframeURL="http://www.autoblog.com/"/>);
  }
});
export default DealerOperations;

