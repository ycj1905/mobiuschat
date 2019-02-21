import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Ryan from '../assets/images/ryan-gosling.png';

const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

const Friends = (props) => {
    const { classes } = props;

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                {/* <Avatar alt="Remy Sharp" src="/assets/images/ryan-gosling.png" /> */}
                <Avatar alt="Remy Sharp" src={Ryan} />
            </ListItemAvatar>
            <ListItemText
                primary="Brunch this weekend?"
                secondary={
                <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                    Hello
                    </Typography>
                    {" My name is Ryan Gosling"}
                </React.Fragment>
                }
            />
            </ListItem>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                {/* <Avatar alt="Remy Sharp" src="/assets/images/ryan-gosling.png" /> */}
                <Avatar alt="Remy Sharp" src={Ryan} />
            </ListItemAvatar>
            <ListItemText
                primary="Brunch this weekend?"
                secondary={
                <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                    Hello
                    </Typography>
                    {" My name is Ryan Gosling"}
                </React.Fragment>
                }
            />
            </ListItem>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                {/* <Avatar alt="Remy Sharp" src="/assets/images/ryan-gosling.png" /> */}
                <Avatar alt="Remy Sharp" src={Ryan} />
            </ListItemAvatar>
            <ListItemText
                primary="Brunch this weekend?"
                secondary={
                <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                    Hello
                    </Typography>
                    {" My name is Ryan Gosling"}
                </React.Fragment>
                }
            />
            </ListItem>
        </List>
    )
}

export default withStyles(styles)(Friends);
