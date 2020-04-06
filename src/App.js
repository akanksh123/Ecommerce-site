import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-contents';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.contents';
import Header from './components/header/header.component'
import SignInSignUp from './pages/signin-signup/signin-signup';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snap => {
          setCurrentUser({
            id: snap.id,
            ...snap.data()
          })
        })
      }
      else {
        setCurrentUser(userAuth)
      }

    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (< SignInSignUp />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    )
  };
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
