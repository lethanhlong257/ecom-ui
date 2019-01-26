import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

const adSliderStyle = theme => ({
  ...carouselStyle,
  fillSlot2: {
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  bannerToSlider: {
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  fillSlot: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

export default adSliderStyle;
