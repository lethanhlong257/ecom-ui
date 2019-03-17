import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import headerEcomStyle from "assets/jss/material-kit-react/views/componentsSections/headerEcomStyle.jsx";
import PropTypes from "prop-types";

import {
  getMenuItemsLevel1,
  getMenuItemsLevel2,
  getMenuItemsLevel2ParentCodes
} from "apis/menu.js";

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  hoverOn = () => {
    this.setState({ hover: true });
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };
  render() {
    const { classes } = this.props;
    const menuItemsLevel1 = getMenuItemsLevel1();
    const menuItemsLevel2 = getMenuItemsLevel2();
    const menuItemsLevel2ParentCodes = getMenuItemsLevel2ParentCodes();
    const menuItemsLevel3ParentCodes = [];
    return (
<<<<<<< HEAD
      <div id="menu_area" className="menu-area">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-light navbar-expand-lg mainmenu">
              <button
                className="navbar-toggler ml-auto btn-menu-navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon-custom">
                  <i className="navbar-toggler-icon-bars fas fa-bars" />
                </span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  {menuItemsLevel1.map((item, index) => {
                    if (menuItemsLevel2ParentCodes.indexOf(item.code) === -1) {
                      return (
                        <li key={index}>
                          <a href={item.link}>{item.name}</a>
=======
      <div>
        <Header
          brand="Category"
          className={classes.menuEcomCustom}
          color="primary"
          leftLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  item.name
                </Button>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  item.name
                </Button>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  item.name
                </Button>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  item.name
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <CustomDropdown
                  buttonText="Dropdown"
                  buttonProps={{
                    className: classes.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    "Action",
                    "Another action",
                    "Something else here",
                    { divider: true },
                    "Separated link",
                    { divider: true }
                  ]}
                />
              </ListItem>
            </List>
          }
        />

        <div id="menu_area" className="menu-area">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-light navbar-expand-lg mainmenu">
                <button
                  className="navbar-toggler ml-auto btn-menu-navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon-custom">
                    <i className="navbar-toggler-icon-bars fas fa-bars" />
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="active">
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Link</a>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a href="#">Action</a>
                        </li>
                        <li>
                          <a href="#">Another action</a>
                        </li>
                        <li>
                          <a href="#">Something else here</a>
>>>>>>> ca5acb733235c79311d71b2a0e7d204e2f74b8c8
                        </li>
                      );
                    } else {
                      return (
                        <li
                          onMouseEnter={this.hoverOn}
                          onMouseLeave={this.hoverOff}
                          className="dropdown"
                        >
                          <a
                            className="dropdown-toggle"
                            href={item.link}
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {item.name}
                            <ul
                              className={
                                this.state.hover
                                  ? "menu-content-dropdown-level1 dropdown-menu"
                                  : "dropdown-menu"
                              }
                              aria-labelledby="navbarDropdown"
                            >
                              {menuItemsLevel2.map((item, index) => (
                                <li key={index}>
                                  <a href={item.link}>{item.name}</a>
                                </li>
                              ))}
                            </ul>
                          </a>
                        </li>
                      );
                    }
                  })}
                  {/* <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      href="javascript:void(0)"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a href="javascript:void(0)">Action</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Another action</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Something else here</a>
                      </li>
                      <li className="dropdown">
                        <a
                          className="dropdown-toggle"
                          href="javascript:void(0)"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown2
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a href="javascript:void(0)">Action</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Another action</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Something else here</a>
                          </li>
                          <li className="dropdown">
                            <a
                              className="dropdown-toggle"
                              href="javascript:void(0)"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown3
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <a href="javascript:void(0)">Action</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Another action</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerEcomStyle)(HeaderMenu);
