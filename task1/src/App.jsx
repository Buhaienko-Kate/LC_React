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
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <>
        <Spinner />
        <Login onLogin={onLogin} />
        <Logout />
      </>
    );
  }
}

export default App;
// 0. make a layout
// 1.split on components
// 2.static version in react
// 3.declare state and props
// 4.write logic
