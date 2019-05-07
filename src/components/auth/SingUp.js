import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';
// import { login } from '../../actions/authAction';



const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      status: '',
      gender: ''
    };
  }

  componentDidMount() {
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push('/students');
    // }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSignUp = event => {
    event.preventDefault();
    // const { userId, password } = this.state;
    // this.props.login(userId, password)
  }
  
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={this.onSignUp}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input name="email" type="email" autoComplete="email" onChange={this.handleChange} autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" onChange={this.handleChange} autoComplete="current-password" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="first_name">First Name</InputLabel>
              <Input name="first_name" type="text" onChange={this.handleChange} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="last_name">Last Name</InputLabel>
              <Input name="last_name" type="text" onChange={this.handleChange} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="age-simple">Status</InputLabel>
                <Select
                    value={this.state.status}
                    onChange={this.handleChange}
                    inputProps={{
                    name: 'status',
                    id: 'status',
                    }}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value="Staff">Staff</MenuItem>
                    <MenuItem value="Student">Student</MenuItem>
                </Select>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="age-simple">Gender</InputLabel>
                <Select
                    value={this.state.gender}
                    onChange={this.handleChange}
                    inputProps={{
                    name: 'gender',
                    id: 'gender',
                    }}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }

}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
//   login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  // auth: state.fetch.user,
  // isAuthenticated: state.user.isAuthenticated
});

// export default withStyles(styles)(SignIn);
export default withStyles(styles)(connect(mapStateToProps, {  })(SignUp));
