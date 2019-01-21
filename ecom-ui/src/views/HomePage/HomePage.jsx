import React, { Component } from "react";
import { connect } from "react-redux";
import SectionHeaderEcom from "../Components/Sections/SectionHeaderEcom.jsx";
import SectionFooterEcom from "../Components/Sections/SectionFooterEcom.jsx";
//import * as homePageAction from "../../actions/HomePage/HomePageAction.js";

class HomePage extends Component {
  render() {
    return (
      <div>
        <SectionHeaderEcom />
        <SectionFooterEcom />
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
