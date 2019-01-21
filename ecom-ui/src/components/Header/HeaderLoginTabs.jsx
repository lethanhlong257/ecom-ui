import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";
import HeaderFormLogin from "./HeaderFormLogin.jsx";

class HeaderLoginTabs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <CustomTabs
        headerColor="primary"
        tabs={[
          {
            tabName: "Đăng nhập",
            tabIcon: Face,
            tabContent: <HeaderFormLogin />
          },
          {
            tabName: "Đăng kí",
            tabIcon: Chat,
            tabContent: (
              <p className={classes.textCenter}>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus. I think that’s a
                responsibility that I have, to push possibilities, to show
                people, this is the level that things could be at.
              </p>
            )
          }
        ]}
      />
    );
  }
}

HeaderLoginTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(tabsStyle)(HeaderLoginTabs);
