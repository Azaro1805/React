import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    frontWeight: "bold",
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this); // return a new instance of the handeIncrement func.
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
    //console.log("Increment Clicked", this);
  };


  render() {
    return (
      <div>
        <span className={this.getBadgeClassses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({id : 1})}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

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

  getBadgeClassses() {
    let classes = "badge bg-primary m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
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
