import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

import CurrencyFormat from 'react-currency-format';

const styles = theme => ({
    card: {
        maxWidth: 350,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class RecipeReviewCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes, title , price, nutrients, short_description } = this.props;

        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="http://www.monngon.tv/uploads/images/2017/04/08/5b52220232a25ddca6925e903ac7787d-sinh-to-cam-s.jpg"
                    title="Paella dish"
                />

                <CardHeader
                    action={
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    }
                    title={
                        <b>{title}</b>
                    }
                    subheader={
                            <i><CurrencyFormat value={parseInt(price)} displayType={'text'} thousandSeparator={true} /> VNĐ</i>
                        }
                />

                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <Divider variant="middle" />
                    <CardContent>
                        {this.props.nutrients.map((item, index) => (
                            <Chip style = {{margin: "3px"}}
                                  key={index}

                                  label={
                                      <Typography style={{color:"#ffffff", fontStyle:"italic"}}>
                                          {item}
                                      </Typography>
                                  }
                                  deleteIcon={<DoneIcon />}
                                  className={classes.chip}
                                  color= "secondary"
                            />
                        ))}
                    </CardContent>
                </Collapse>

                <CardContent>
                    <Typography paragraph>
                        {short_description}
                        <a>Show more</a>
                    </Typography>

                    <Button variant="contained" color="secondary" fullWidth>
                        Add to cart
                    </Button>
                </CardContent>
            </Card>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);