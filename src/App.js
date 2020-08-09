import React, { Component } from "react";
import "./App.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
    isComplete: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.item === "") {
      return;
    }
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      status: "active",
    };

    const updatedItems = [newItem, ...this.state.items];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filteredItems });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  handleComplete = (id) => {
    this.state.items.forEach((item) => {
      if (item.id === id) {
        item.status === "completed"
          ? (item.status = "active")
          : (item.status = "completed");
      }
    });
    this.setState({
      items: this.state.items,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h2 className="text-capitalize text-center">
              <strong>Todo</strong> Matic
            </h2>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleComplete={this.handleComplete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
