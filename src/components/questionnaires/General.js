import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { connect } from 'react-redux';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
          width: 800,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },
      root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.background.paper,
      },
      formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
          display: 'block',
        margin: `${theme.spacing.unit}px 0`,
      },
      submit: {
        marginTop: theme.spacing.unit * 3,
      },
})

const questionnaries = [
    {content: 'Welcome to learning React! okay?'},
    {content: 'You can install React from npm. okay?'},
    {content: 'How old are you?'},
    {content: 'How old are you?'},
    {content: 'How old are you?'},
    {content: 'How old are you?'}
  ];

class General extends Component {

    state = {
        scores: [1,1,1,1,1,1],
    };

    handleChange = index => (event) => {
        const score = parseInt(event.target.value);
        const scores = this.state.scores;
        scores[index] = score;
        this.setState({ scores: scores });
    };

    submitScore = event => {
        event.preventDefault();
        console.log(this.state.scores);
    }
    render() {
        const { classes } = this.props;
        // console.log(questionnaries);
        return(
            <main className={classes.main}>
                <List className={classes.root}>
                    {questionnaries.map((question, index) => 
                        <ListItem key={index} alignItems="flex-start">
                            {index+1}  : 
                            <ListItemText
                                primary={question.content}
                            />
                            <RadioGroup
                                        aria-label="Rating"
                                        name="rating"
                                        className={classes.group}
                                        onChange={this.handleChange(index)}
                                    >
                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                <FormControlLabel value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                        </ListItem>
                    )}
                </List>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.submitScore}
                    >
                    Submit
                </Button>
            </main>
        );
    }
}

export default withStyles(styles)(connect()(General));