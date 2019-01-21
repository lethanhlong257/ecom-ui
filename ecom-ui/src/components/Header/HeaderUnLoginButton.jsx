/* eslint-disable prettier/prettier */
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import headerEcomStyle from "assets/jss/material-kit-react/views/componentsSections/headerEcomStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";
import PropTypes from "prop-types";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";
import HeaderLoginTabs from './HeaderLoginTabs.jsx';

import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";


import { connect } from "react-redux";

function Transition(props) {
	return <Slide direction="down" {...props} />;
}

class HeaderUnLoginButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			classicModal: false
		};
	}
	handleClickOpen(modal) {
		var x = [];
		x[modal] = true;
		this.setState(x);
	}
	handleClose(modal) {
		var x = [];
		x[modal] = false;
		this.setState(x);
	}
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Button
					href="#pablo"
					className={classes.navLinkTopNavCustom}
					color="transparent"
					onClick={() => this.handleClickOpen("classicModal")}
				>
					<span className={classes.topNavIcon}>
						<AccountCircle className={classes.icons} />
					</span>
					<span className={classes.topNavText}> Đăng nhập/Đăng kí</span>
				</Button>
				<Dialog
					classes={{
						root: classes.center,
						paper: classes.modal
					}}
					open={this.state.classicModal}
					TransitionComponent={Transition}
					keepMounted
					onClose={() => this.handleClose("classicModal")}
					aria-labelledby="classic-modal-slide-title"
					aria-describedby="classic-modal-slide-description"
				>
					<DialogContent
						id="classic-modal-slide-description"
						className={classes.modalBody}
					>
						
					<HeaderLoginTabs />

					</DialogContent>
					<DialogActions className={classes.modalFooter}>
						<Button
							onClick={() => this.handleClose("classicModal")}
							color="danger"
							simple
						>
							Close
          </Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

HeaderUnLoginButton.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(headerEcomStyle, javascriptStyles, loginStyle)(connect()(HeaderUnLoginButton));
