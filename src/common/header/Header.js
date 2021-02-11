import React, {Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';


class Header extends Component{

    constructor(){
        super();
        this.state = {
            modalIsOpen:false
        };
    }


    showModalHandler = () => {
        if(!this.state.modalIsOpen){
            alert('modal about to open');
            this.setState({modalIsOpen:true});
        }else{
            alert('modal about to close');
            this.setState({modalIsOpen:false});
        }
        
        // this.setState({modalIsOpen:true});
        // alert("Login Successful");
    }

    render(){
        return (
            <div>
                <header className = 'Header'>
                    <img src = {logo} className = 'appLogo' alt = 'play'></img>
                    <Button color = "default" variant = "contained" onClick = {this.showModalHandler}>Login</Button>
                    {/* <Button variant="contained" color="secondary">Delete</Button> alert("Login Successful")*/}
                </header>
                <Modal ariaHideApp = 'false' isOpen = {this.state.modalIsOpen} contentLabel = "Login" onRequestClose = {this.showModalHandler}>
                    <Button color = "secondary" variant = "contained" onClick = {this.showModalHandler}>X</Button>
                </Modal>
            </div>
        )
    }
}

export default Header;