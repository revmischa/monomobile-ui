import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import './App.css';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
        network: {},
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
                this.setState({network: response.data})
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const {classes} = this.props;
        const net = this.state.network;
        console.log(net);

        return (
            <React.Fragment>
                <Grid item md={12} sm={12} xs={12}>
                    <p>{net.name} subscribers, call or text anyone using extention</p>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nickname</TableCell>
                                    <TableCell numeric>Extention</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {net.subscribers && net.subscribers.map(n => {
                                    return (
                                        <TableRow key={n.id}>
                                            {/*<TableCell component="th" scope="row">*/}
                                            {/*{n.id}*/}
                                            {/*</TableCell>*/}
                                            <TableCell>{n.nickname}</TableCell>
                                            <TableCell numeric>{n.extension_display}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Network);

