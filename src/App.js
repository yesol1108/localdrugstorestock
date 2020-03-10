import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import SearchBar from './components/SearchBar';
import Data from './Data';

import Map from './components/Map';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      address : "",
      lat: 0,
      lng: 0,
    }
  }

  onSearchByAddress(addr) {
    this.setState({
      address : addr
    })
  }

  selectStore(lat, lng) {
    this.setState({
      lat: lat,
      lng: lng
    })
  }

  render() {
    return (
        <div>
          <SearchBar onSearchByAddress={this.onSearchByAddress.bind(this)} />
          <Grid columns={2}>
            <Grid.Column>
              <Data address={this.state.address} selectStore={this.selectStore.bind(this)}/>
            </Grid.Column>
            <Grid.Column>
              <Map lat={this.state.lat} lng={this.state.lng} />
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default App;
