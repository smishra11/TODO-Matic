import React, { Component } from "react";

import TodoItem from "./TodoItem";
import Filtered from "./Filtered";

export default class TodoList extends Component {
  render() {
    const { items, handleDelete, handleEdit } = this.props;
    let showClicked = () => {
      items.map((item) => {
        // console.log(item);
        return <Filtered item={item} />;
      });
    };
    return (
      <>
        <div className="row">
          <div className="col">
            <button className="btn btn-outline-secondary" onClick={showClicked}>
              Show All
            </button>
          </div>
          <div className="col">
            <button className="btn btn-outline-secondary">Active</button>
          </div>
          <div className="col">
            <button className="btn btn-outline-secondary">Completed</button>
          </div>
        </div>
        <ul className="list-group my-5">
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
