import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getService } from '../../actions/serviceAction';

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
});
class Service_student extends Component {

    componentDidMount (){
        this.props.getService();
    }
    render() {
        const { classes } = this.props;
        const { services } = this.props.services;
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/login' />

        return (
            <main className={classes.main}>
                {services.map((service, index) => {
                    const date = new Date(service.date.seconds * 1000);
                    const post_date = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear()
                    return (
                        <Card key={index} className={classes.card}>
                            <CardHeader
                                title={service.title}
                                subheader={post_date}
                            />
                            <CardContent>
                                <Typography component="p">
                                    {service.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    )}
                )}
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        services: state.service,
        auth: state.firebase.auth
    }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    getService: () => dispatch(getService())
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Service_student));