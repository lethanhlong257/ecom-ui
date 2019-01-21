import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";
import { lightBlackColor } from "assets/jss/material-kit-react.jsx";

const footerCustomStyle = {
  ...footerStyle,
  footer: {
    padding: "0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: lightBlackColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  }
};
export default footerCustomStyle;
