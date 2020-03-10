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
    console.log(this.state);
    this.props.onSearchByAddress(this.state.addr);
  }
 
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <Input
          placeholder="예- '서울특별시 강남구' or '서울특별시 강남구 논현동'"
          value={this.state.addr}
          onChange={this.handleChange}
          name="addr"
        />
        <Button type="submit">검색</Button>
      </form>
      
    );
  }
}

