import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import { withStyles } from "@material-ui/core";
import Email from "@material-ui/icons/Email";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import logo from "assets/img/logo.png";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";

import multiFooterStyle from "assets/jss/material-kit-react/components/multiFooterStyle.jsx";

function MultiFooter({ ...props }) {
  const { classes } = props;

  return (
    <div className={classes.topFooter}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={6} sm={3}>
            <div className={classes.multiFooterCol}>
              <img
                className={classes.logoFooter + " img-fluid logo-top"}
                src={logo}
                alt="logo"
              />
              <p>Địa chỉ: ABC XYZ</p>
              <p>Email: ABC XYZ</p>
              <p>Điện thoại: ABC XYZ</p>
            </div>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <div className={classes.multiFooterCol}>
              <h3>Categories</h3>
              <a
                className={classes.footerLink}
                href="/about-us"
                target="_blank"
              >
                Category 1
              </a>
              <span> | </span>
              <a
                className={classes.footerLink}
                href="/blog-posts"
                target="_blank"
              >
                Category 2
              </a>
              <span> | </span>
              <a
                className={classes.footerLink}
                href="/contact-us"
                target="_blank"
              >
                Category 3
              </a>
              <span> | </span>
              <a
                className={classes.footerLink}
                href="/contact-us"
                target="_blank"
              >
                Category 4
              </a>
              <h3>Quick Link</h3>
              <a
                className={classes.footerLink}
                href="/about-us"
                target="_blank"
              >
                Link 1
              </a>
              <span> | </span>
              <a
                className={classes.footerLink}
                href="/blog-posts"
                target="_blank"
              >
                Link 2
              </a>
              <span> | </span>
              <a
                className={classes.footerLink}
                href="/contact-us"
                target="_blank"
              >
                Link 3
              </a>
              <span> | </span>
              <a
                className={classes.footerLink}
                href="/contact-us"
                target="_blank"
              >
                Link 4
              </a>
            </div>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <div className={classes.multiFooterCol}>
              <h3>Cổng thanh toán</h3>
              <img
                className={classes.imgFooter + " img-fluid"}
                src="./img/footer/mastercard-logo-visa.png"
                alt="mastercard and visa logo"
              />
              <h3>Đăng kí bộ công thương</h3>
              <img
                className={classes.imgFooter + " img-fluid"}
                src="./img/footer/dang-ki-bo-cong-thuong.png"
                alt="Bo cong thuong logo"
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
                <Button size="lg">Subscribe</Button>
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
