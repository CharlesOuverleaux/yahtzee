import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    faces: ['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    let classes = `Die fas fa-dice-${this.props.faces[this.props.val - 1]} fa-5x`;
    if (this.props.locked) classes += ' Die-locked';
    if (this.props.shaking && !this.props.locked) classes += ' shaking';
    return (
      <i className={classes}
          // we pass the whole event, but here we only want the handleClick
          // we can do this w. an arrow function, onClick={() => this.props.handleClick(this.props.idx)}
          // but that's not optimal for perf, so we do a new function
          // whenever we do a function we need to bind this, otherwise this is undefeined
          onClick={this.handleClick}
        >
      </i>

    );
  }
}

export default Die;
