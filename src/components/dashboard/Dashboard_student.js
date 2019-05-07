import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateProfile } from '../../actions/authAction';

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
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
})

class Dashboard_student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.profile.firstName,
            lastName: '',
            email: ''
        };
        this.onChange = this.onChange.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }

    onChange(event){
        // console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    }

    editProfile = event => {
        event.preventDefault();
        const { auth, profile } = this.props;
        console.log(this.state.firstName);
        if (this.state.firstName == ''){
            console.log("OK"+ profile.firstName);
            this.setState({firstName: profile.firstName});
        }
        console.log(this.state.firstName);
        this.props.updateProfile(this.state)
    }

    render() {
        const { classes } = this.props;
        const { auth, profile } = this.props;
        if (!auth.uid) return <Redirect to='/login' />
       
        if (!profile.firstName){
            return <main className={classes.main}></main>
        }
        return (
            <main className={classes.main}>
                <form className={classes.form} onSubmit={this.editProfile}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <Input name="firstName" type="text" onChange={this.onChange} value={profile.firstName} autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <Input name="lastName" type="text" onChange={this.onChange} defaultValue={profile.lastName}/>
                    </FormControl> 
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input name="email" type="email" onChange={this.onChange} defaultValue={auth.email}/>
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                        Edit
                    </Button>  
                </form>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
  
const mapDispatchToProps = (dispatch) => {
  return {
      updateProfile: (currentUser) => dispatch(updateProfile(currentUser))
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Dashboard_student));