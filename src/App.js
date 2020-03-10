import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Map from './components/Map';
import Data from './Data';
class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      address : "",
    }
  }

  onSearchByAddress(addr) {
    this.setState({
      address : addr
    })
  }

  render() {
    return (
        <div>
          <SearchBar onSearchByAddress={this.onSearchByAddress.bind(this)}/>
          <Data address={this.state.address}/>
          <Map/>
        </div>
    );
  }
}

export default App;
