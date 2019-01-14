import React, { Component } from "react";

// core components
import Button from "components/CustomButtons/Button.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import { withStyles } from "@material-ui/core";

class CardHeaderForm extends Component {

    render() {
        const { classes, ...rest } = this.props;
        const { title } = this.props;

        return (

            <CardHeader color="primary" className={classes.cardHeader}>
                <h4>
                    <b>
                        {title}
                    </b>
                </h4>
                <div className={classes.socialLine}>
                    <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                    >
                        <i className={"fab fa-twitter"} />
                    </Button>
                    <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                    >
                        <i className={"fab fa-facebook"} />
                    </Button>
                    <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                    >
                        <i className={"fab fa-google-plus-g"} />
                    </Button>
                </div>
            </CardHeader>
        );
    }
}

export default withStyles(loginPageStyle)(CardHeaderForm);
