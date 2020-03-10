import React, { Component, createRef } from 'react';
import { Segment, Grid, Ref, Rail, Sticky } from 'semantic-ui-react';
import SearchBar from './components/SearchBar';
import Data from './Data';

import Map from './components/Map';

class App extends Component {
  contextRef = createRef()

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
              <Ref innerRef={this.contextRef}>
                <Segment>
                    <Data address={this.state.address} selectStore={this.selectStore.bind(this)}/>
                  <Rail size='big' close position='right'>
                    <Sticky context={this.contextRef}>
                      <Map lat={this.state.lat} lng={this.state.lng} />
                    </Sticky>
                  </Rail>
                </Segment>
              </Ref>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default App;
