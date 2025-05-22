import React, { Component } from 'react'
export default class List extends Component {
  render() {
    return (
      
       <ul className="list-group my-3">
        {this.props.items.map((value, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {value}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.deleteItem(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    
    )
  }
}
