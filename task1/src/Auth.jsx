import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// input: props(obj)
// output:jsx (domelem)

// algo:
// 1.show Loggin dy default
// 2.after Loggin click-hide Loggin? show spinner for 2 seconds
// 2.after 2 sec - hide Spinner and show Logout
// 3. after click logout -hide logout, show Loggin
class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };
  // setstate input: state obj & callback(state, props)
  // setstate output: undefined

  loginHandler = () => {
    this.setState({
      isProcessing: true,
    });
    setTimeout(() => {
      this.setState({ isProcessing: false, isLoggedIn: true });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn, isProcessing } = this.state;

    if (isProcessing) {
      return <Spinner />;
    }
    //   if (isLoggedIn) {
    //     return <Logout onLogout={this.logoutHandler} />;
    //   }
    //   return <Login onLogin={this.loginHandler} />;
    return isLoggedIn ? (
      <Logout onLogout={this.logoutHandler} />
    ) : (
      <Login onLogin={this.loginHandler} />
    );
  }
}

export default Auth;
// 0. make a layout
// 1.split on components
// 2.static version in react
// 3.declare state and props
// 4.write logic
