import React, {Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component{

    constructor(){
        super();
        this.state = {
            modalIsOpen:false,
            value:0 // 0 = First tab, 1 = second tab, etc.
        };
    }


    showModalHandler = () => {
        if(!this.state.modalIsOpen){
            //alert('modal about to open');
            this.setState({modalIsOpen:true});
        }else{
            //alert('modal about to close');
            this.setState({modalIsOpen:false});
        }
        
        // this.setState({modalIsOpen:true});
        // alert("Login Successful");
    }

    selectedTab(valueSel) {
        return function(){
            this.setState({value:valueSel});
        }
    };

    render(){
        return (
            <div>
                <header className = 'Header'>
                    <img src = {logo} className = 'appLogo' alt = 'play'></img>
                    <Button color = "default" variant = "contained" onClick = {this.showModalHandler}>Login</Button>
                    {/* <Button variant="contained" color="secondary">Delete</Button> alert("Login Successful")*/}
                </header>
                {/* <Modal className = 'loginModal' ariaHideApp = 'false' isOpen = {this.state.modalIsOpen} 
                contentLabel = "Login" onRequestClose = {this.showModalHandler}>
                    
                    <div className = 'modalTabs' >
                        <Button onClick = {this.showModalHandler} size = 'small'>X</Button>
                        <Tabs value = {this.state.value} aria-label="simple tabs example">
                            <Tab label="Login"  />
                            <Tab label="Register"  />
                        </Tabs>
                    </div>
                
                </Modal> */}
                <Modal className = 'loginModal'
                isOpen = {this.state.modalIsOpen} ariaHideApp = {false} onRequestClose = {this.showModalHandler}>
                    <div>
                        <Button onClick = {this.showModalHandler} size = 'small'>X</Button>
                        <Tabs value = {this.state.value}>
                            <Tab label = "Login" onClick = {this.selectedTab(0).bind(this)} ></Tab>
                            <Tab label = "Register" onClick = {this.selectedTab(1).bind(this)}></Tab>
                        </Tabs>
                    </div>
                </Modal>


            </div>
        )
    }
}

export default Header;