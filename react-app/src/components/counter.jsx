import React, { Component } from "react";

class Counter extends Component {
  /*
  state = {
    value: this.props.counter.value,
    //imageUrl: "https://picsum.photos/200",
    //tags: ["tag1", "tag2", "tag3"],
  };
  */

  /*styles = {
    frontWeight: "bold",
  };
  */

  /*
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this); // return a new instance of the handeIncrement func.
  }
*/


/*
  handleIncrement = () => {
    //console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
*/

  render() {
    //console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClassses()}>{this.formatvalue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  /*
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags! </p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <il key={tag}> {tag}</il>
        ))}{" "}
      </ul>
    );
  }
  */

  getBadgeClassses() {
    let classes = "badge bg-primary m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
//in rander dev
//<img src = {this.state.imageUrl} alt=""/>

//button & counter
/* 
    <div>
    <span className={this.getBadgeClassses()}>{this.formatCount()}</span>
    <button className="btn btn-secondary btn-sm">Increment</button>
    </div> 

    <div>
        {this.state.tags.length === 0 && 'Please create a new tags!' };
        {this.renderTags()}
    </div>;

    */
