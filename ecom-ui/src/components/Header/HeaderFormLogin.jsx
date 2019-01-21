import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";

class HeaderFormLogin extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form}>
        <div className="loginBySocail">
          Login with:
          <Button
            justIcon
            href="#pablo"
            target="_blank"
            color="transparent"
            onClick={e => e.preventDefault()}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
          <Button
            justIcon
            href="#pablo"
            target="_blank"
            color="transparent"
            onClick={e => e.preventDefault()}
          >
            <i className={classes.socialIcons + " fab fa-google-plus-g"} />
          </Button>
        </div>
        <CustomInput
          labelText="Email..."
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "email",
            endAdornment: (
              <InputAdornment position="end">
                <Email className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
        <CustomInput
          labelText="Password"
          id="pass"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "password",
            endAdornment: (
              <InputAdornment position="end">
                <Icon className={classes.inputIconsColor}>lock_outline</Icon>
              </InputAdornment>
            )
          }}
        />
        <Button color="primary" size="lg">
          Đăng nhập
        </Button>
      </form>
    );
  }
}

HeaderFormLogin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginStyle)(HeaderFormLogin);
