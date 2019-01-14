import React, { Component } from "react";
import { connect } from "react-redux";

// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Call from "@material-ui/icons/Call";
import PinDrop from "@material-ui/icons/PinDrop";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CardHeaderForm from "components/CardHeaderForm/CardHeaderForm.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/contact-bg-01.jpg";
import { withStyles } from "@material-ui/core";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardAnimaton: "cardHidden"
    }
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
    console.log(classes);

    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
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
                backgroundSize: "fit",
                backgroundPosition: "top center"
              }}
            >
              <div className={classes.container}>
                <GridContainer justify="left">
                  <GridItem xs={12} sm={12} md={6}>
                    <Card className={classes[this.state.cardAnimaton]}>
                      <form className={classes.form}>
                        <CardHeaderForm title={'Contact Us'} />

                        <CardBody>
                          <Grid container spacing={24}>
                            <Grid item xs={6}>
                              <table>
                                <tr>
                                  <td>
                                    <Call style={{ color: "#e91e63", fontSize: "35px" }} />
                                  </td>
                                  <td style={{ fontSize: "17px" }}><b>Give us a ring</b></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td style={{ color: "#999" }}>
                                    Michael Jordan <br />
                                    +40 762 321 762 <br />
                                    Mon - Fri, 8:00-22:00
                                  </td>
                                </tr>
                              </table>
                            </Grid>
                            <Grid item xs={6}>
                              <table>
                                <tr>
                                  <td>
                                    <PinDrop style={{ color: "#e91e63", fontSize: "35px" }} />
                                  </td>
                                  <td style={{ fontSize: "17px" }}><b>Find us at the office</b></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td style={{ color: "#999" }}>
                                    Bld Mihail Kogalniceanu, nr. 8, <br />
                                    7652 Bucharest <br />
                                    Romania
                                  </td>
                                </tr>
                              </table>
                            </Grid>
                            <Grid item xs={6}>
                              <CustomInput
                                labelText="First Name..."
                                id="first"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  type: "text",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <People className={classes.inputIconColor} />
                                    </InputAdornment>
                                  )
                                }}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <CustomInput
                                labelText="Email address ..."
                                id="email"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  type: "email",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <Email />
                                    </InputAdornment>
                                  )
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <CustomInput
                                labelText="Your Message"
                                id="message"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  type: "area",
                                  rows: "6"
                                }}
                              />
                            </Grid>
                          </Grid>
                        </CardBody>

                        <CardFooter>
                          <div align="right" style={{ width: "100%" }}>
                            <Button color="primary" size="lg">
                              SEND MESSAGE
                            </Button>
                          </div>
                        </CardFooter>
                      </form>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
    (withStyles(loginPageStyle)(ContactUs))
