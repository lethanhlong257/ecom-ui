import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import {
  primaryColor,
  lightGray,
  whiteColor,
  container
} from "assets/jss/material-kit-react.jsx";

const headerEcomStyle = theme => ({
  ...headerLinksStyle(theme),
  container,
  navLinkTopNavCustom: {
    ...headerLinksStyle(theme).navLink,
    height: "30px",
    [theme.breakpoints.down("sm")]: {
      height: "25px"
    }
  },
  listItemEcomCustom: {
    ...headerLinksStyle(theme).listItem,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      "&:after": {
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  navLinkTopNavDropdownCustom: {
    ...headerLinksStyle(theme).navLink,
    height: "30px",
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      height: "30px"
    }
  },
  topNavText: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  topNavIcon: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    }
  },
  top_nav: {
    background: lightGray
    // color: "#666"
  },
  midle_nav: {
    paddingBottom: "10px",
    paddingTop: "10px"
  },
  search_bar_wrap: {
    marginTop: "10px"
  },
  search_bar_icon: {
    color: whiteColor,
    background: primaryColor,
    border: "none"
  },
  search_icon: {
    color: whiteColor
  },
  cart_wrap: {
    textAlign: "center",
    paddingTop: "5px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "12px"
    }
  },
  cart_icon: {
    marginTop: "3px",
    color: primaryColor,
    fontSize: "25px"
  },
  cart_item_price: {
    fontWeight: "700",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
});

export default headerEcomStyle;
