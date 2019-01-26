import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import adSliderStyle from "assets/jss/material-kit-react/views/componentsSections/adSliderStyle.jsx";
import SectionCarouselEcomCustom from "views/Components/Sections/SectionCarouselEcomCustom.jsx";
import { bannerData, sliderData } from "apis/caroseul.js";
import siteConfigs from "apis/siteConfigs.json";

class SectionAdSlider extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <SectionCarouselEcomCustom
              caroseulData={sliderData()}
              isEnableCaptionSlider={siteConfigs.isEnableCaptionSlider}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.marginAuto}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
                <img
                  src={bannerData()[0].srcImg}
                  alt={bannerData()[0].altImg}
                  className="slick-image img-fluid"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
                <img
                  src={bannerData()[1].srcImg}
                  alt={bannerData()[1].altImg}
                  className={classes.fillSlot2 + " slick-image img-fluid"}
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

SectionAdSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(adSliderStyle)(SectionAdSlider);
