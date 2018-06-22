import axios from "axios/index";
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core/styles/index";
import red from "@material-ui/core/colors/red";
import {Redirect} from "react-router-dom";

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
})


class Register extends Component {
    state = {
        id: '',
        nickname: '',
        email: '',
        toNetwork: false,
        error: false
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleRegistration = () => {
        axios.post('http://api.monomobile.llolo.lol/api/register', {
            iccid_last5: this.state.id,
            email: this.state.email,
            nickname: this.state.nickname
        })
            .then(response => {
                const res = response.data
                console.log(response);
                if (res.is_error === true) {
                    this.setState(() => ({
                        error: true
                    }));
                } else {
                    this.setState(() => ({
                        toNetwork: true
                    }))
                }
            })
            .catch(error => {
                console.log(error);
                this.setState(() => ({
                    error: true
                }));
            });
    };

    render() {
        const {classes} = this.props;

        if (this.state.toNetwork === true) {
            return <Redirect to='/' />
        }


        return (

                <React.Fragment>

                    <Grid item md={6} sm={12} xs={12}>
                        <Card className={classes.card} style={{padding: 40}}>
                            <p>Easy to register </p>
                            <p>1. Enter last 5 characters from ICCID (under the barcode) </p>
                            <p>2. Enter your email address</p>
                            <p>3. Choose a nickname</p>
                            <p>You're all set</p>
                        </Card>
                    </Grid>
                    <Grid className={classes.formContainer} item md={6} sm={12} xs={12} style={{padding: 0}}>
                        <Card className={classes.cardForm} style={{padding: 40}}>
                            <form action="">
                                <FormControl className={classes.cardFormControl}>
                                    <TextField placeholder={"XXXXF"} id="id" label="ICCID last 5 characters"
                                               value={this.state.id} onChange={this.handleChange('id')}></TextField>
                                </FormControl>
                                <br/>
                                <br/>
                                <FormControl className={classes.cardFormControl}>
                                    <TextField placeholder={"youremail@example.com"} id="email" label="Email"
                                               value={this.state.email} onChange={this.handleChange('email')}
                                               type="email"></TextField>
                                </FormControl>
                                <br/>
                                <br/>
                                <FormControl className={classes.cardFormControl}>
                                    <TextField id="nickname" label="Nickname" value={this.state.nickname}
                                               onChange={this.handleChange('nickname')}></TextField>
                                </FormControl>
                                <br/>
                                <br/>
                                <Button className={classes.button} onClick={this.handleRegistration} variant="contained"
                                        type="button"
                                        color="primary">
                                    Register
                                </Button>
                            </form>
                            {this.state.error === true && (
                                <p className={"red"}>That was an error, please try again or submit correct data</p>
                            )
                            }


                        </Card>
                    </Grid>
                </React.Fragment>
        )
    }
}

export default withStyles(styles)(Register);
