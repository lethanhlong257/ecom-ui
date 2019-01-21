/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { withStyles, ListItem, List } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import logo from "assets/img/logo.png";

import multiFooterStyle from "assets/jss/material-kit-react/components/multiFooterStyle.jsx";

function MultiFooter({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <div className={footerClasses}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={6} sm={3}>
            <div className={classes.multiFooterCol}>
              <img className="img-fluid logo-top" src={logo} alt="logo" />
              <p>Text 1</p>
              <p>Text 2</p>
            </div>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <div className={classes.multiFooterCol}>
              <h3>Categories</h3>
              <List className={classes.list}>
                <ListItem>
                  <a href="/about-us" target="_blank">
                    About us
                  </a>
                </ListItem>
                <ListItem>
                  <a href="/blog-posts" target="_blank">
                    Blog
                  </a>
                </ListItem>
                <ListItem>
                  <a href="/contact-us" target="_blank">
                    Liên Hệ
                  </a>
                </ListItem>
              </List>
            </div>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <div className={classes.multiFooterCol}>
            </div>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <div className={classes.multiFooterCol}>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

MultiFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(multiFooterStyle)(MultiFooter);
