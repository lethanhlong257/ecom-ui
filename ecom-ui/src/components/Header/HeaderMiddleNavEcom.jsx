import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import headerEcomStyle from "assets/jss/material-kit-react/views/componentsSections/headerEcomStyle.jsx";
import PropTypes from "prop-types";

import logo from "assets/img/logo.png";

class HeaderMiddleNavEcom extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.midle_nav}>
          <div className={classes.container}>
            <div className="row">
              <div className="col-md-3">
                <img className="img-fluid logo-top" src={logo} alt="logo" />
              </div>
              <div className="col-md-7 col-9">
                <div className={classes.search_bar_wrap + " input-group"}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tim kiem ..."
                    aria-label="Tim kiem ..."
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className={
                        classes.search_bar_icon + " btn btn-outline-secondary"
                      }
                      type="button"
                    >
                      <i className={classes.search_icon + " fas fa-search"} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-3">
                <div className={classes.cart_wrap}>
                  <div className={classes.cart_icon_wrap}>
                    <i className={classes.cart_icon + " fa fa-shopping-cart"} />
                  </div>
                  <div className={classes.cart_item_price}>
                    <span>180.000</span>
                    VND
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HeaderMiddleNavEcom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerEcomStyle)(HeaderMiddleNavEcom);
