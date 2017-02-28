import React, { Component } from 'react';
import { connect } from 'react-redux'
class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            json: {
                data: {
                    username: localStorage.getItem('username') || "",
                    password: ''
                }
            }
        };
    }
    handleSubmit(event) {
        event.preventDefault()
        const email = this.refs.email.value
        const pass = this.refs.pass.value
        const user = this.state.json.data;
        var values = {
            username: email,
            password: pass,
            rememberMe: true
        }
        localStorage.setItem('username', values.username);
        this.props.dispatch({ type: 'userInfo', text: values.username });
        this.context.router.replace({
            pathname: '/main'
        });
    }
    render() {
        return (
            <div className="middle-box text-center loginscreen  animated fadeInDown">
                <div>
                    <div>
                        <h1 className="logo-name">Login In</h1>
                    </div>
                    <form className="m-t"  onSubmit={this.handleSubmit.bind(this) }>
                        <div className="form-group">
                            <input type="email"  ref="email" className="form-control" placeholder="Username" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" ref="pass" className="form-control" placeholder="Password" required/>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
                        <a ui-sref="forgot_password" href='#/forgotPassword'><small>Forgot password?</small></a>
                    </form>
                    <p className="m-t"> <small>Demo App &copy; 2017</small> </p>
                </div>
            </div>
        )
    }

}
Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        user: state[0]
    };
}

var resultingModule = connect(mapStateToProps)(Login);

export default resultingModule


