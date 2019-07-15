import React, { Component } from "react";

class Counter extends Component {
  state = { 
      id: this.props.id,
      value: this.props.val
  };

  handleClick = msg => {
    this.setState({ value: this.state.value + 1 });
  };

  handleReset = ()=>{
      debugger;
      this.setState({value:0});
  };
 
  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button onClick={() => this.handleClick("message")}>click</button>
        <button onClick={() => this.props.onDelete(this.state.id)}>delete</button>
      </div>
    );
  }
}

export default Counter;
