import React from 'react';
import './signin-signup.scss';
import SignIn from '../../components/signin-component/signin.component';
import SignUp from '../../components/signup/sign-up.component';
const SignInSignUp = () => (
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div>

)

export default SignInSignUp;