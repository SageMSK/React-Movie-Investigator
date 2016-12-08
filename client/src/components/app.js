import React, { Component } from 'react';

import Header from './common/Header';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;