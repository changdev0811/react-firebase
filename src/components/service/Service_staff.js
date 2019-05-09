import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getService, createService, deleteService, updateService } from '../../actions/serviceAction';

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
        marginTop: theme.spacing.unit * 3,
    },
    card: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    fab: {
        margin: theme.spacing.unit,
        float: 'right'
    },
  });
class Service_staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c_open: false,
            e_open: false,
            id: '',
            title: '',
            content: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleOpenCreateDialog = () => {
        this.setState({ c_open: true });
    };

    handleSave = () => {
        const newService = {
            title: this.state.title,
            content: this.state.content
        }
        this.handleClose();
        this.setState({
            id: '', 
            title: '',
            content: ''
        })
        this.props.createService(newService);
    }

    handleOpenEditDialog(id){
        this.setState({ e_open: true });
        const { services } = this.props.services;
        const service = services[id];
        this.setState({
            id: service.id,
            title: service.title,
            content: service.content
        });
        
    };

    handleEdit = () => {
        const updated_service = {
            id: this.state.id,
            title: this.state.title,
            content: this.state.content
        }
        this.setState({
            id: '', 
            title: '',
            content: ''
        })
        this.handleClose();
        this.props.updateService(updated_service)
    }

    handleClose = () => {
        this.setState({
            id: '', 
            title: '',
            content: ''
        })
        this.setState({ c_open: false, e_open: false });
    };
   
    handleDelete(id) {
        this.props.deleteService(id);
    }

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
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleOpenCreateDialog}>
                    <AddIcon />
                </Fab>
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
                            <CardActions className={classes.actions} disableActionSpacing>
                                <Fab color="secondary" size="small" className={classes.fab} onClick={this.handleOpenEditDialog.bind(this, index)}>
                                    <EditIcon />
                                </Fab>
                                <Fab aria-label="Delete" size="small" className={classes.fab} onClick={this.handleDelete.bind(this, service.id)}>
                                    <DeleteIcon />
                                </Fab>
                            </CardActions>
                        </Card>
                    )}
                )}

                <Dialog
                    open={this.state.c_open}
                    onClose={this.handleClose}
                    aria-labelledby="create_service"
                    >
                    <DialogTitle id="create_service">Create Service</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            placeholder="Title"
                            label="Title"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Content"
                            placeholder="Content"
                            multiline
                            margin="normal"
                            name="content"
                            value={this.state.content}
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.handleSave} color="primary">
                        Save
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={this.state.e_open}
                    onClose={this.handleClose}
                    aria-labelledby="edit_service"
                    >
                    <DialogTitle id="edit_service">Edit Service</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            placeholder="Title"
                            label="Title"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Content"
                            placeholder="Content"
                            multiline
                            margin="normal"
                            name="content"
                            value={this.state.content}
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.handleEdit} color="primary">
                        Save
                        </Button>
                    </DialogActions>
                </Dialog>
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
    getService: () => dispatch(getService()),
    createService: (service) => dispatch(createService(service)),
    updateService: (service) => dispatch(updateService(service)),
    deleteService: (id) => dispatch(deleteService(id))
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Service_staff));