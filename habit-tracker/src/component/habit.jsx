import React, { Component } from "react";

class Habit extends Component {
  render() {
    return (
      <>
        <li className='habit'>
          <span className='habit-name'>Reading</span>
          <span className='habit-name'>Reading</span>
          <button className='habit-button habit-increase'>
            <i className='fas fa-plus'></i>
          </button>
          <button className='habit-button habit-decrease'>
            <i className='fas fa-minus'></i>
          </button>
          <button className='habit-button habit-delete'>
            <i class='fas fa-trash-alt'></i>{" "}
          </button>
        </li>
      </>
    );
  }
}

export default Habit;
