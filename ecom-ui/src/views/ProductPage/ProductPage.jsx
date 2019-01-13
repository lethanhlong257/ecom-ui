import React, { Component } from "react";
import { connect } from "react-redux";
//import * as homePageAction from "../../actions/HomePage/HomePageAction.js";

class ProductPage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">ProductPage Page</h1>
            <p className="lead">Jumbo helper text</p>
            <hr className="my-2" />
            <p>More info</p>
            <p className="lead">
              <a
                className="btn btn-primary btn-lg"
                href="Jumbo action link"
                role="button"
              >
                Jumbo action name
              </a>
            </p>
          </div>
        </div>
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
)(ProductPage);
