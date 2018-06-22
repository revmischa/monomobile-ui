import React, {Component} from 'react';
import logo from './face-with-monocle.png';
import {withStyles} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Register from './Register'
import Network from './Network'
import {Route, HashRouter  as Router} from 'react-router-dom'


// import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#FE6B8B',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contast with palette.primary.main
        },
        // secondary: {
        // light: '#0066ff',
        // main: '#0044ff',
        // // dark: will be calculated from palette.secondary.main,
        // contrastText: '#ffcc00',
        // },
        // error: will use the default color
    },
    overrides: {
        // Name of the component ⚛️ / style sheet
        MuiButton: {
            // Name of the rule
            root: {
                // Some CSS
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
            },
        },
    },
});

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
    },
    linkLogo: {
        textDecoration: "none"
    }
});

// We can inject some CSS into the DOM.

class App extends Component {

    render() {
        const {classes} = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <Router>
                        <React.Fragment>
                            <CssBaseline/>
                            <div className="App">
                                <header className="App-header">
                                    <a href="/" className={classes.linkLogo}><img src={logo} className="App-logo"
                                                                                  alt="logo"/><span
                                        className={"logo-text"}>MonoMobile</span>
                                    </a>
                                    {/*<MenuList>*/}
                                    {/*<MenuItem className={classes.menuItem}>About</MenuItem>*/}
                                    {/*<MenuItem className={classes.menuItem}>Contact</MenuItem>*/}
                                    {/*</MenuList>*/}
                                </header>
                                <Grid className={classes.container} container spacing={0}>
                                    <Route path="/register" exact component={Register}/>
                                    <Route path="/" exact component={Network}/>
                                </Grid>
                            </div>
                        </React.Fragment>
                    </Router>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);

