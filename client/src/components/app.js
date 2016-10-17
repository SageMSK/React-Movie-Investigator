import React, { Component } from 'react';

import Header from './common/Header';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;