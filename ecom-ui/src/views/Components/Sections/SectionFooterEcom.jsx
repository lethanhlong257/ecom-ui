import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Footer from "components/Footer/Footer.jsx";
import MultiFooter from "components/Footer/MultiFooter.jsx";
class SectionHeaderEcom extends React.Component {
  render() {
    return (
      <div>
        <MultiFooter />
        <Footer />
      </div>
    );
  }
}

export default withStyles()(SectionHeaderEcom);
