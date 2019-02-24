import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import headerEcomStyle from "assets/jss/material-kit-react/views/componentsSections/headerEcomStyle.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "components/Header/Header.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdownMenu.jsx";
import Button from "components/CustomButtons/Button.jsx";
import PropTypes from "prop-types";

import {
  getMenuItemsLevel1,
  getMenuItemsLevel2,
  getMenuItemsLevel2ParentCodes
} from "apis/menu.js";

class HeaderMenu extends React.Component {
  render() {
    const { classes } = this.props;
    const menuItemsLevel1 = getMenuItemsLevel1();
    const menuItemsLevel2 = getMenuItemsLevel2();
    const menuItemsLevel2ParentCodes = getMenuItemsLevel2ParentCodes();
    return (
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
                  className="navbar-toggler ml-auto"
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
                      <a href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
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
                            Dropdown2
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
                                Dropdown3
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
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
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
