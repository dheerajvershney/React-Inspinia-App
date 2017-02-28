
import React, { Component } from 'react';
import { connect } from 'react-redux'
class ForgotPassword extends Component {
    constructor(props, context) {
        super(props, context);
    }
    onForgotPassword(e) {
        e.preventDefault();
        swal(
            'Sent',
            'Reset password emailed to you!',
            'success'
        )
    }
    render() {
        return (
            <div className="passwordBox animated fadeInDown"> <div className="row">
                <div className="col-md-12">
                    <div className="ibox-content">
                        <h2 className="font-bold">Forgot password</h2>
                        <p>Enter your email address and your password will be reset and emailed to you.
                        </p>
                        <div className="row">
                            <div className="col-lg-12">
                                <form className="m-t" role="form"  onSubmit={this.onForgotPassword.bind(this) }>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email address" required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary block full-width m-b">Send new password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>)
    }

}

ForgotPassword.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        email: 'demo'
    };
}

var resultingModule = connect(mapStateToProps)(ForgotPassword);

export default resultingModule


