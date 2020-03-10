import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import SearchBar from './components/SearchBar';
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
          <SearchBar onSearchByAddress={this.onSearchByAddress.bind(this)} />
          <Grid columns={2}>
            <Grid.Column>
              <Data address={this.state.address}/>
            </Grid.Column>
            <Grid.Column>
              {/* <Map/> */}
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default App;
