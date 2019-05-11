import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';
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
    card: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    media: {
        height: 140,
    },
})

class GeneralAdvice extends Component {
    render() {
        const { classes } = this.props;
        return(
            <main className={classes.main}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            How to deal with mental health and university
                        </Typography>
                        <Typography component="p">
                            Some content Some content Some content Some content Some content Some content Some content Some content Some content Some content
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </main>
        );
    }
}

export default withStyles(styles)(connect()(GeneralAdvice));