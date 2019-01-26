import React from "react";
import Carousel from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import adSliderStyle from "assets/jss/material-kit-react/views/componentsSections/adSliderStyle.jsx";

class SectionCarouselEcomCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caroseulData: []
    };
  }

  componentDidMount() {
    this.setState({
      caroseulData: this.props.caroseulData
    });
  }
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <Carousel {...settings}>
        {this.state.caroseulData.map((slider, key) => {
          return (
            <a key={key} href={slider.link}>
              <img
                src={slider.srcImg}
                alt={slider.altImg}
                className="slick-image"
              />
              {this.props.isEnableCaptionSlider ? (
                <div className="slick-caption">
                  <h4>{slider.caption}</h4>
                </div>
              ) : (
                false
              )}
            </a>
          );
        })}
        <a
          className={classes.bannerToSlider}
          href={this.props.bannerData[0].link}
        >
          <img
            src={this.props.bannerData[0].srcImg}
            alt={this.props.bannerData[0].altImg}
            className="slick-image"
          />
          {this.props.isEnableCaptionSlider ? (
            <div className="slick-caption">
              <h4>{this.props.bannerData[0].caption}</h4>
            </div>
          ) : (
            false
          )}
        </a>
        <a
          className={classes.bannerToSlider}
          href={this.props.bannerData[1].link}
        >
          <img
            src={this.props.bannerData[1].srcImg}
            alt={this.props.bannerData[1].altImg}
            className="slick-image"
          />
          {this.props.isEnableCaptionSlider ? (
            <div className="slick-caption">
              <h4>{this.props.bannerData[1].caption}</h4>
            </div>
          ) : (
            false
          )}
        </a>
      </Carousel>
    );
  }
}

export default withStyles(adSliderStyle)(SectionCarouselEcomCustom);