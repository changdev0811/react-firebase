import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

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

function NavBar(props) {
  const { classes } = props;
  const { auth } = props;
  const links = auth.uid ? (
      <div>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        <Button color="inherit" component={Link} to="/service">Service</Button>
        <Button color="inherit" component={Link} to="/logout">LogOut</Button>
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
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" className={classes.grow}>
          </Typography>
          {
            links
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default withStyles(styles)(connect(mapStateToProps)(NavBar));
