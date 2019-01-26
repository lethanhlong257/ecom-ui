import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerCustomStyle from "assets/jss/material-kit-react/components/footerCustomStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={classes.footerBottom}>
      <div className={classes.container}>
        &copy; {1900 + new Date().getYear()} , made with{" "}
        <Favorite className={classes.icon} /> by{" "}
        <a href="/" className={aClasses} target="_blank">
          React+Python team
        </a>{" "}
        for a better web.
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerCustomStyle)(Footer);
