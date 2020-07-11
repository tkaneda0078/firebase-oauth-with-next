import App from '../components/App'
import { auth, firebase } from '../lib/firebase'
import React from 'react'

class Home extends React.Component {
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    auth
      .signInWithPopup(provider)
      .then(() => {
        alert("You are signed In")
      })
      .catch(err => {
        alert("OOps something went wrong check your console")
        console.log(err)
      });
  };

  handleSignout() {
    auth
      .signOut()
      .then(function () {
        alert("Logout successful")
      })
      .catch(function (err) {
        alert("OOps something went wrong check your console")
        console.log(err)
      });
  };

  render() {
    return (
      <App>
        <p>Index Page</p>
        <button onClick={this.handleSignIn}>Sign In using google</button> 
        <button onClick={this.handleSignout}>Signout</button>
      </App>
    )
  }
}

export default Home