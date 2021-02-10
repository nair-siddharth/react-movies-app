import React, {Component} from 'react';
import './Header.css';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Header extends Component{
    render(){
        return (
            <div id = 'Header'>
                <Button color = "default" variant = "contained" onClick = {(e) => alert("Login Successful")}>Login</Button>
                {/* <Button variant="contained" color="secondary">Delete</Button> */}
            </div>
        )
    }
}

export default Header;