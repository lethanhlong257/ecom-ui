import React, { Component } from "react";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import CardHeaderForm from "components/CardHeaderForm/CardHeaderForm.jsx";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// text info about page
import * as Info from "./info";

import image from "assets/img/contact-bg-01.jpg";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import { withStyles } from "@material-ui/core";



function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardAnimaton: "cardHidden",
      value: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  getTitle() {
    return (
      <div>
        {'About Us'}<br /><i>{'Quality Is Our Way Of Life'}</i>
      </div>
    );
  }

  render() {
    const { classes, ...rest } = this.props;
    const { value } = this.state;

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
                backgroundSize: "cover",
                backgroundPosition: "top center"
              }}
            >
              <div className={classes.container}>
                <GridContainer justify="left">
                  <GridItem xs={12} sm={12} md={7}>
                    <Card className={classes[this.state.cardAnimaton]}>
                      <form className={classes.form}>
                        <CardHeaderForm title={this.getTitle()} />
                        <CardBody>
                          <Tabs
                            value={value}
                            onChange={this.handleChange}
                            centered
                          >
                            <Tab label="VISION AND MISSION" />
                            <Tab label="CORE VALUES" />
                            <Tab label="HISTORY" />
                          </Tabs>

                          {value === 0 && <TabContainer>{Info.visionAndMission()}</TabContainer>}
                          {value === 1 && <TabContainer>{Info.coreValues()}</TabContainer>}
                          {value === 2 && <TabContainer>{Info.history()}</TabContainer>}

                        </CardBody>
                        <CardFooter>

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

export default withStyles(loginPageStyle)(AboutUs);
