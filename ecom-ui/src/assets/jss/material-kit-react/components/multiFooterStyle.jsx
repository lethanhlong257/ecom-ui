import footerCustomStyle from "assets/jss/material-kit-react/components/footerCustomStyle.jsx";
import { lightBlackColor } from "assets/jss/material-kit-react.jsx";

const multiFooterStyle = {
  ...footerCustomStyle,
  topFooter: {
    background: lightBlackColor,
    color: "white",
    padding: "15px 0px",
    marginTop: "15px"
  },
  footerLink: {
    color: "white"
  },
  imgFooter: {
    width: "50%"
  },
  logoFooter: {
    padding: "15px"
  }
};
export default multiFooterStyle;
