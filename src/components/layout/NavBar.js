import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOut } from '../../actions/authAction';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends Component {

  onSignout = (event) => {
    event.preventDefault();
    this.props.signOut();
  }

  render() {
    const { classes } = this.props;
    const { auth } = this.props;
    const links = auth.uid ? (
        <div>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/service">Service</Button>
          <Button color="inherit" onClick={this.onSignout}>LogOut</Button>
        </div>
      ): (
        <div>
          <Button color="inherit" component={Link} to="/login">SignIn</Button>
          <Button color="inherit" component={Link} to="/signup">SignUp</Button>
        </div>
      )
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
            </Typography>
            {
              links
            }
            <IconButton
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(NavBar));
