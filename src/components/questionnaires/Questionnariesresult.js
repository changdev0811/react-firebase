import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getScores} from '../../actions/scoreAction';

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
    title: {
      margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
  });

class Questionnariesresult extends Component {
    state = {
        dense: false,
        secondary: false,
    };

    componentDidMount (){
        this.props.getScores();
    }

    render() {
        const { classes } = this.props;
        const { dense } = this.state;
        const { scores } = this.props;
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/login' />
        return(
            <main className={classes.main}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" className={classes.title}>
                    Result
                    </Typography>
                    <div className={classes.demo}>
                    {scores.map((score, index) => {
                        return (
                            <List key={index} dense={dense}>
                                <ListItem>
                                    <ListItemText
                                    primary={score.email}
                                    secondary={score.average_score}
                                    />
                                </ListItem>
                            </List>
                        )}
                    )}
                    </div>
                </Grid>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      scores: state.score.scores
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        getScores: () => dispatch(getScores()),
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Questionnariesresult));