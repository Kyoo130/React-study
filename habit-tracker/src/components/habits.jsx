import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {

  handleIncrement = habit => {
    this.props.onIncrement(habit);
  };

  handleDecrement = habit => {
    this.props.onDecrement(habit);

  };

  handleDelete = habit => {
    // console.log(`handleDelete ${habit.name}`);
    // const habits = this.state.habits.filter(item => item.id !== habit.id);
    // this.setState({ habits });
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
