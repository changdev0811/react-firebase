import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
        width: '50%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    edit: {
        width: '50%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
    },
    buttons: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    button: {
        width: '48%',
        margin: theme.spacing.unit,
    },
    button_1: {
        marginTop: theme.spacing.unit * 2,
    },
})

class Dashboard_student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editEnable: false,
            firstName: this.props.profile.firstName,
            lastName: this.props.profile.lastName,
            email: this.props.auth.email
        };
        this.onChange = this.onChange.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }

    onChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleEdit(){
        this.setState({editEnable: true});
    }

    editProfile = event => {
        event.preventDefault();
        let firstName = '';
        let lastName = '';
        let email = this.state.email;
        if (this.state.firstName === undefined){
           firstName = this.props.profile.firstName;
        }else{
            firstName = this.state.firstName;
        }
        if (this.state.lastName === undefined){
            lastName = this.props.profile.lastName;
        }else{
            lastName = this.state.lastName;
        }
        this.props.updateProfile({firstName, lastName, email})
        this.setState({editEnable: false})
    }

    render() {
        const { classes } = this.props;
        const { auth, profile } = this.props;
        if (!auth.uid) return <Redirect to='/login' />
        if (!profile.firstName){
            return (<main className={classes.main} />);
        }
        return (
            <main className={classes.main}>
                {(() => {
                    if(this.state.editEnable === true){
                        return (
                            <div>
                                <form className={classes.form} onSubmit={this.editProfile}>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                                        <Input name="firstName" type="text" onChange={this.onChange} defaultValue={profile.firstName} autoFocus />
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
                                        Save
                                    </Button>  
                                </form>
                            </div>
                        )
                    }else{
                        return (
                            <div>
                                <FormControl margin="normal" required fullWidth>
                                    Username: {profile.firstName} {profile.lastName}
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    Email: {auth.email}
                                </FormControl>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.edit}
                                    onClick={this.handleEdit.bind(this)}
                                    >
                                    Edit Profile
                                </Button>  
                            </div>
                        )
                    }
                })()}
                
                {(() => {
                    if(profile.status === 'Student'){
                        return(
                        <div>
                        <div className={classes.buttons}>
                            <Button variant="contained" color="primary" className={classes.button} component={Link} to="/general">
                                General
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} component={Link} to="/general">
                                Mental Health
                            </Button>
                        </div>
                        <Button variant="contained" color="secondary" component={Link} to="/advice" fullWidth>
                            General Advice
                        </Button></div>
                    )}else{
                        return(
                            <div>
                               <Button variant="contained" color="secondary"  className={classes.button_1} component={Link} to="/manage_service" fullWidth>
                                    Update Services
                                </Button>
                                <Button variant="contained" color="secondary"  className={classes.button_1} component={Link} to="/questionnariesresult" fullWidth>
                                    Questionnaries Results
                                </Button> 
                            </div>
                        )
                    }
                })()}
                
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