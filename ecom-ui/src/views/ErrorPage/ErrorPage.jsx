import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import CardHeaderForm from "components/CardHeaderForm/CardHeaderForm.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/contact-bg-01.jpg";

class ErrorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardAnimaton: "cardHidden"
    };
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4} style={{ textAlign: "center", paddingTop: "100px" }}>
                <div
                  style={{
                    fontSize: "12em",
                    fontWeight: "bold"
                  }}
                >
                  404
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.5em",
                    paddingTop: "120px"
                  }}
                >
                  Page not found :(
                    <br />
                  Ooooups! Looks like you got lost.
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(ErrorPage);
