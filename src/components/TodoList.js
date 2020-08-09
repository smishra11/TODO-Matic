import React, { Component } from "react";

import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  state = {
    clicked: "showall",
    itemData: [],
    buttonActive: "showall",
    btnArray: [
      { name: "Show All", value: "showall" },
      { name: "Active", value: "active" },
      { name: "Completed", value: "completed" },
    ],
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
      buttonActive: data,
    });
  };

  render() {
    const { handleDelete, handleEdit, handleComplete } = this.props;
    const { itemData, btnArray, buttonActive } = this.state;
    return (
      <>
        <div className="row">
          {btnArray.map((item) => {
            return (
              <div className="col" key={item.value}>
                <button
                  className={
                    buttonActive === item.value
                      ? "btn btn-secondary td-btn"
                      : "btn btn-outline-secondary td-btn"
                  }
                  onClick={() => this.showClicked(item.value)}
                >
                  {item.name}
                </button>
              </div>
            );
          })}
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
