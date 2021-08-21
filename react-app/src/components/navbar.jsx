import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav classname="navbar navbar-light bg-light">
        <div cldivss="container-fluid">
         
          Navbar{" "}
          <span className="badge badge-pill badge bg-primary m-2 bg-">
            {this.props.totalCounters}
          </span>
        </div>
      </nav>
    );
  }
}


/*
const Navabr = (props) =>{
 return (
      <nav classname="navbar navbar-light bg-light">
        <div cldivss="container-fluid">
         
          Navbar{" "}
          <span className="badge badge-pill badge bg-primary m-2 bg-">
            {props.totalCounters}
          </span>
        </div>
      </nav>
    );
};
*/










export default Navbar;
