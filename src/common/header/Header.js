import React, {Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Header extends Component{
    render(){
        return (
            <div>
                <header className = 'Header'>
                    <img src = {logo} className = 'appLogo' alt = 'play'></img>
                    <Button color = "default" variant = "contained" onClick = {(e) => alert("Login Successful")}>Login</Button>
                    {/* <Button variant="contained" color="secondary">Delete</Button> */}
                </header>
            </div>
        )
    }
}

export default Header;