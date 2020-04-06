import React, { Component } from 'react';
import './signin.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    handleSubmit = async (event) => {
        const { email, password } = this.state;
        try {
            auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error(error);
        }

    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="Email" type="email" onChange={this.handleChange} value={this.state.email} required />
                    <FormInput name="password" label="Password" type="password" onChange={this.handleChange} value={this.state.password} required />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit" >Sign In</CustomButton>
                        <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;