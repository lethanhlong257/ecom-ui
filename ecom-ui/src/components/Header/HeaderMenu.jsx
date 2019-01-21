import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import headerEcomStyle from "assets/jss/material-kit-react/views/componentsSections/headerEcomStyle.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "components/Header/Header.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import PropTypes from "prop-types";

class HeaderMenu extends React.Component {
  render() {
    const { classes } = this.props;
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
                  Link
                </Button>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Link
                </Button>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Link
                </Button>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Link
                </Button>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Link
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Link
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
                    { divider: true },
                    "One more separated link"
                  ]}
                />
              </ListItem>
            </List>
          }
        />
      </div>
    );
  }
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerEcomStyle)(HeaderMenu);
