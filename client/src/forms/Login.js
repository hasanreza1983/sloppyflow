import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import { Link } from 'react-router';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class Login extends Component {
    render() {
        const {fields: {username, password}, handleSubmit} = this.props;
        
        return (
            <form onSubmit={handleSubmit}>
                <FormGroup
                    controlId="usernameInput"
                >
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="eg. John.Doe"
                        {...username}
                    />
                    <FormControl.Feedback />
                </FormGroup>


                <FormGroup
                    controlId="passwordInput"
                >
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="password"
                        placeholder="*********"
                        {...password}
                    />
                    <FormControl.Feedback />
                </FormGroup>

                <Button type="submit" bsStyle="info">
                    Login
                </Button>

                <Link to="register">
                    <Button type="button" bsStyle="default" style={{marginLeft: 10}}>
                        Register
                    </Button>
                </Link>

                <span style={{marginLeft: 20, color: '#eeeeee'}}>|</span> <Button type="button" bsStyle="link">remind password</Button>
            </form>
        );
    }
}

Login = reduxForm({
    form: 'login',
    fields: ['username', 'password'],
})(Login);

export default Login;
