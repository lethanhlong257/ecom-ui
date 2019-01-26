import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { withStyles, ListItem, List } from "@material-ui/core";
import Email from "@material-ui/icons/Email";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import logo from "assets/img/logo.png";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";

import multiFooterStyle from "assets/jss/material-kit-react/components/multiFooterStyle.jsx";

function MultiFooter({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const Classes = classNames({
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
              <a href="/about-us" target="_blank">
                Category 1
              </a>
              <span> | </span>
              <a href="/blog-posts" target="_blank">
                Category 2
              </a>
              <span> | </span>
              <a href="/contact-us" target="_blank">
                Category 3
              </a>
              <span> | </span>
              <a href="/contact-us" target="_blank">
                Category 4
              </a>
              <h3>Quick Link</h3>
              <a href="/about-us" target="_blank">
                Link 1
              </a>
              <span> | </span>
              <a href="/blog-posts" target="_blank">
                Link 2
              </a>
              <span> | </span>
              <a href="/contact-us" target="_blank">
                Link 3
              </a>
              <span> | </span>
              <a href="/contact-us" target="_blank">
                Link 4
              </a>
            </div>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <div className={classes.multiFooterCol}>
              <h4>Cổng thanh toán</h4>
              <img
                className="img-fluid"
                src="./img/footer/mastercard-logo-visa.png"
              />
              <h4>Đăng kí bộ công thương</h4>
              <img
                className="img-fluid"
                src="./img/footer/dang-ki-bo-cong-thuong.png"
              />
            </div>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <div className={classes.multiFooterCol}>
              <h3>Subscribe</h3>
              <form action="#">
                <CustomInput
                  labelText="Email..."
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <Button simple color="primary" size="lg">
                  Subscribe
                </Button>
              </form>
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
