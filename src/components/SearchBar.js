import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addr: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchByAddress(this.state.addr);
  }
 
  render() {
    return (
    <Input action = { <Button color='teal' content='Search' onClick={this.handleSubmit } /> }
          placeholder="예- '서울특별시 강남구' or '서울특별시 강남구 논현동'"
          value={this.state.addr}
          onChange={this.handleChange}
          name="addr"
          style={{width: '95%', height: 50, margin: 10}}
        />
    );
  }
}

