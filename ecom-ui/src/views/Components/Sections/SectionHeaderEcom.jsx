import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import headerEcomStyle from "assets/jss/material-kit-react/views/componentsSections/headerEcomStyle.jsx";
import HeaderMiddleNavEcom from "components/Header/HeaderMiddleNavEcom.jsx";
import HeaderTopNavEcom from "components/Header/HeaderTopNavEcom.jsx";
import HeaderMenu from "components/Header/HeaderMenu.jsx";

class SectionHeaderEcom extends React.Component {
  render() {
    return (
      <div>
        <HeaderTopNavEcom />
        <HeaderMiddleNavEcom />
        <HeaderMenu />

        <a
          id="back-to-top"
          href="#"
          className="btn btn-primary btn-lg back-to-top"
          role="button"
          title="Click to return on the top page"
          data-toggle="tooltip"
          data-placement="left"
        >
          <span className="glyphicon glyphicon-chevron-up" />
        </a>
      </div>
    );
  }
}

export default withStyles(headerEcomStyle)(SectionHeaderEcom);
