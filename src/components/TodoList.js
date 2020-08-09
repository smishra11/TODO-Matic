import React, { Component } from "react";

import TodoItem from "./TodoItem";
// import Filtered from "./Filtered";'

export default class TodoList extends Component {
  state = {
    clicked: "showall",
    itemData: [],
    showAllClicked: false,
    showActiveClicked: false,
    showCompletedClicked: false,
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.items.length !== prevProps.items.length) {
      this.setState({
        itemData: this.props.items,
      });
    }
  };
  showClicked = (data) => {
    const filterData =
      data === "active"
        ? this.props.items.filter((item) => item.status === "active")
        : data === "completed"
        ? this.props.items.filter((item) => item.status === "completed")
        : this.props.items;

    this.setState({
      clicked: data,
      itemData: filterData,
    });
  };

  render() {
    const { handleDelete, handleEdit, handleComplete } = this.props;
    const { itemData } = this.state;
    return (
      <>
        <div className="row">
          <div className="col">
            <button
              className={
                this.state.showAllClicked
                  ? "btn btn-secondary td-btn"
                  : "btn btn-outline-secondary td-btn"
              }
              onClick={() => this.showClicked("showall")}
            >
              Show All
            </button>
          </div>
          <div className="col">
            <button
              className={
                this.state.showActiveClicked
                  ? "btn btn-secondary td-btn"
                  : "btn btn-outline-secondary td-btn"
              }
              onClick={() => this.showClicked("active")}
            >
              Active
            </button>
          </div>
          <div className="col">
            <button
              className={
                this.state.showCompletedClicked
                  ? "btn btn-secondary td-btn"
                  : "btn btn-outline-secondary td-btn"
              }
              onClick={() => this.showClicked("completed")}
            >
              Completed
            </button>
          </div>
        </div>
        {this.state.clicked.length > 0 && (
          <ul className="list-group my-5">
            {itemData.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  title={item.title}
                  handleDelete={() => handleDelete(item.id)}
                  handleEdit={() => handleEdit(item.id)}
                  handleComplete={() => handleComplete(item.id)}
                />
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
