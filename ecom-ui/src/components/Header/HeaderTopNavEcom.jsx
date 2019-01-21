/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import Email from "@material-ui/icons/Email";
import withStyles from "@material-ui/core/styles/withStyles";
import headerEcomStyle from "assets/jss/material-kit-react/views/componentsSections/headerEcomStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Badge from "components/Badge/Badge.jsx";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import HeaderUnLoginButton from './HeaderUnLoginButton.jsx';
import HeaderLogedInButton from './HeaderLogedInButton.jsx';

import { connect } from "react-redux";


class HeaderTopNavEcom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.top_nav}>
        <div className={classes.container}>
          <div className="d-flex">
            <div className="p-1 mr-auto">
              <Button
                href="#pablo"
                className={classes.navLinkTopNavCustom}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                <span className={classes.topNavIcon}>
                  <i
                    className={
                      classes.socialIcons +
                      " " +
                      classes.marginRight5 +
                      " fab fa-facebook"
                    }
                  />
                </span>
              </Button>
              <Button
                href="#pablo"
                className={classes.navLinkTopNavCustom}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                <span className={classes.topNavIcon}>
                  <i
                    className={
                      classes.socialIcons +
                      " " +
                      classes.marginRight5 +
                      " fas fa-phone"
                    }
                  />
                </span>
                <span className={classes.topNavText}> Liên Hệ</span>
              </Button>
            </div>
            <div className="p-1">
              <List className={classes.list}>
                <ListItem className={classes.listItemEcomCustom}>
                  {this.state.isLogin ? <HeaderLogedInButton /> : <HeaderUnLoginButton />}
                </ListItem>
                <ListItem className={classes.listItemEcomCustom}>
                  <Button
                    href="#pablo"
                    className={classes.navLinkTopNavCustom}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <span className={classes.topNavIcon}>
                      <i
                        className={
                          classes.socialIcons +
                          " " +
                          classes.marginRight5 +
                          " far fa-question-circle"
                        }
                      />
                    </span>
                    <span className={classes.topNavText}> Q&A</span>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItemEcomCustom}>
                  <Button
                    href="#pablo"
                    className={classes.navLinkTopNavCustom}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <span className={classes.topNavIcon}>
                      <Email className={classes.icons} />
                      <Badge color="rose">1</Badge>
                    </span>
                    <span className={classes.topNavText}>
                      Thông Báo
                </span>
                  </Button>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HeaderTopNavEcom.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withStyles(headerEcomStyle)(connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderTopNavEcom));
