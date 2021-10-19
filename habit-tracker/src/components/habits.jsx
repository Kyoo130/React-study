import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    // console.log(`handleDelete ${habit.name}`);
    // const habits = this.state.habits.filter(item => item.id !== habit.id);
    // this.setState({ habits });
    this.props.onDelete(habit);
  };

  handleAdd = name => {
    this.props.onAdd(name);
  }

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
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
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;
