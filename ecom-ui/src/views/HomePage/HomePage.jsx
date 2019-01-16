import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderSection from "../Sections/HeaderSection.jsx";
//import * as homePageAction from "../../actions/HomePage/HomePageAction.js";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderSection />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
