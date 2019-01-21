/* eslint-disable prettier/prettier */
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import headerEcomStyle from "assets/jss/material-kit-react/views/componentsSections/headerEcomStyle.jsx";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"
import { connect } from "react-redux";


class HeaderLogedInButton extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <CustomDropdown
        buttonText={
          <div>
            <span className={classes.topNavIcon}>
              <AccountCircle className={classes.icons} />
            </span>
            <span className={classes.topNavText}> Username</span>
          </div>
        }
        buttonProps={{
          className: classes.navLinkTopNavDropdownCustom,
          color: "transparent"
        }}
        dropdownList={[
          "Thông tin cá nhân",
          "Lịch sử đơn hàng",
          "Sản phẩm đã xem",
          "Sản phẩm yêu thích",
          { divider: true },
          "Đăng xuất"
        ]}
      />
    );
  }
}

HeaderLogedInButton.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(headerEcomStyle)(connect()(HeaderLogedInButton));
