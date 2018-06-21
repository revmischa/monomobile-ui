import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import './App.css';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const styles = theme => ({
    card: {
        maxWidth: '100%',
        boxShadow: 'none',
        background: 'linear-gradient(135deg, rgb(86, 91, 115) 0px, rgb(35, 54, 89) 100%);',
        borderRadius: '0',
        height: '100%',
        color: '#fff'
    },
    cardForm: {
        borderRadius: '0',
    },
    container: {
        maxWidth: '720px',
        margin: '0 auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    formContainer: {
        backgroundColor: '#eaeaea',
    },
    menuItem: {
        display: 'inline-block'
    },
    cardFormControl: {
        width: '100%'
    }
});

// We can inject some CSS into the DOM.

class Network extends Component {
    state = {
        id: '',
        nickname: '',
        email: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    componentWillMount() {
        this.getNetwork()
    }

    getNetwork = () => {
        axios.get('http://api.monomobile.llolo.lol/api/network/1')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Grid item md={12} sm={12} xs={12}>
                    Network page
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Network);

