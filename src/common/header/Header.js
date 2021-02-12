import React, {Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Typography } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';

import PropTypes from 'prop-types'; // This throws a warning if a validation put on a section is not followed. 
                                    // Here, we wil put a requirement of ensuring TabContainer has children

const TabContainer = function(props){
    return (
        <Typography component = 'div' className = 'form'>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children : PropTypes.node.isRequired
}

class Header extends Component{

    constructor(){
        super();
        this.state = {
            modalIsOpen:false,
            value:0, // 0 = First tab, 1 = second tab, etc.
            userNameRequired: 'displayNone',// used to hide formHelperText
            username:'',// Stores username
            passwordRequired:'displayNone',
            password:'',
            
            nameRequiredReg:'displayNone',
            usernameRequiredReg:'diaplayNone',
            passwordRequiredReg:'displayNone',
            confirmPasswordRequiredReg:'displayNone',
            emailRequiredReg:'displayNone',
            passwordsMatchReg:'displayNone',


            nameReg:'',
            usernameReg:'',
            emailReg:'',
            passwordReg:'',
            confirmpasswordReg:'',

        };
    }


    showModalHandler = () => {
        if(!this.state.modalIsOpen){
            //alert('modal about to open');
            this.setState({modalIsOpen:true});
        }else{
            // alert('modal about to close');
            this.setState({userNameRequired:'displayNone'});
            this.setState({passwordRequired:'displayNone'});
            this.setState({modalIsOpen:false});
            this.setState({value:0});
        }
        
        // this.setState({modalIsOpen:true});
        // alert("Login Successful");
    }

    selectedTab(valueSel) {
        return function(){
            this.setState({userNameRequired:'displayNone'});
            this.setState({passwordRequired:'displayNone'});

            this.setState({nameRequiredReg:'displayNone'});
            this.setState({emailRequiredReg:'displayNone'});
            this.setState({usernameRequiredReg:'displayNone'});
            this.setState({passwordRequiredReg:'displayNone'});
            this.setState({confirmPasswordRequiredReg:'displayNone'});
            this.setState({passwordsMatchReg:'displayNone'});
            this.setState({value:valueSel});
        }
    }
    //login
    setPasswordInState = (e) => {
        if(e.target.value===''){
            this.setState({passwordRequired:'displayText'});
        }else{
            this.setState({passwordRequired:'displayNone'});
        }
        this.setState({password:e.target.value});
    }

    setUserNameInState = (e) => {
        if(e.target.value===''){
            this.setState({userNameRequired:'displayText'});
        }else{
            this.setState({userNameRequired:'displayNone'});
        }
        this.setState({username:e.target.value});
    }

    loginFormIncomplete(){
        return function(){
            console.log(this.state);
            if(this.state.username === ''){
                this.setState({userNameRequired:'displayText'});
            }
            if(this.state.password===''){
                this.setState({passwordRequired:'displayText'});
            }else{
                console.log('login proceed - 1');
            }
        }
    }

    //register

    setNameInStateReg = (e) => {
        if(e.target.value===''){
            this.setState({nameRequiredReg:'displayText'});
        }else{
            this.setState({nameRequiredReg:'displayNone'});
        }
        this.setState({nameReg:e.target.value});
    }

    setEmailInStateReg = (e) => {
        if(e.target.value===''){
            this.setState({emailRequiredReg:'displayText'});
        }else{
            this.setState({emailRequiredReg:'displayNone'});
        }
        this.setState({emailReg:e.target.value});
    }

    setUserNameInStateReg = (e) => {
        if(e.target.value===''){
            this.setState({usernameRequiredReg:'displayText'});
        }else{
            this.setState({usernameRequiredReg:'displayNone'});
        }
        this.setState({usernameReg:e.target.value});
    }

    setPasswordInStateReg = (e) => {
        if(e.target.value===''){
            this.setState({passwordRequiredReg:'displayText'});
        }else{
            this.setState({passwordRequiredReg:'displayNone'});
        }
        this.setState({passwordReg:e.target.value});
    }

    setConfirmPasswordInStateReg = (e) => {
        if(e.target.value===''){
            this.setState({confirmPasswordRequiredReg:'displayText'});
        }else{
            this.setState({confirmPasswordRequiredReg:'displayNone'});
        }

        this.setState({confirmpasswordReg:e.target.value});

    }

    registerFormIncomplete(){
        
        return function(){
            // console.log(this.state);
            var countErr = 0;
            if(this.state.passwordReg.localeCompare(this.state.confirmpasswordReg)!=0){
                this.setState({passwordsMatchReg:'displayText'});
                countErr++;
            }
            if(this.state.nameReg===''){
                this.setState({nameRequiredReg:'displayText'});
                countErr++;
            }
            if(this.state.usernameReg === ''){
                this.setState({usernameRequiredReg:'displayText'});
                countErr++;
            }
            if(this.state.emailReg===''){
                this.setState({emailRequiredReg:'displayText'});
                countErr++;
            }
            if(this.state.passwordReg === ''){
                this.setState({passwordRequiredReg:'displayText'});
                countErr++;
            }
            if(this.state.confirmpasswordReg===''){
                this.setState({confirmPasswordRequiredReg:'displayText'});
                countErr++;
            }
            console.log(countErr);
            if(countErr===0){
                console.log('register proceed - 1');
            }
        }
    }



    render(){
        return (
            <div>
                <header className = 'Header'>
                    <img src = {logo} className = 'appLogo' alt = 'play'></img>
                    <Button color = "default" variant = "contained" onClick = {this.showModalHandler}>Login</Button>
                </header>

                <Modal className = 'loginModal'
                isOpen = {this.state.modalIsOpen} ariaHideApp = {false} onRequestClose = {this.showModalHandler}>
                    {/* <Button onClick = {this.showModalHandler} size = 'small'>X</Button> */}
                    <Tabs value = {this.state.value}>
                        <Tab label = "Login" onClick = {this.selectedTab(0).bind(this)} ></Tab>
                        <Tab label = "Register" onClick = {this.selectedTab(1).bind(this)}></Tab>
                        
                        {/*This throws a warning
                         <Tab label = "Register2" onClick = {this.selectedTab(2).bind(this)}></Tab>
                         */}
                         
                    </Tabs>

                    {this.state.value===2 &&/* This has no children, and will cause a warning because of PropTypes */
                    <TabContainer>
                    </TabContainer>}

                    {/* 
                        LOGIN
                    */}
                    {this.state.value === 0 && /*If value = 0, then render the following*/ 
                    <TabContainer >
                        <br/>
                        <FormControl required>
                            <InputLabel htmlFor = 'username' className = 'formContents'>Username</InputLabel>
                            <Input type = 'text' id = 'username' className = 'formContents' onChange = {this.setUserNameInState}/>
                            <FormHelperText className = {this.state.userNameRequired}>required</FormHelperText>
                        </FormControl>
                        <br/>
                        <FormControl required>
                            <InputLabel className = 'formContents' htmlFor = 'Password' >Password</InputLabel>
                            <Input type = 'password' id = 'Password' className = 'formContents' onChange = {this.setPasswordInState}/>
                            <FormHelperText className = {this.state.passwordRequired}>password cannot be empty</FormHelperText>
                        </FormControl>
                        <br/><br/>
                        <Button variant = 'contained' color = "primary" className = 'submitBtn'
                        onClick = {this.loginFormIncomplete().bind(this)}>Login</Button>

                    </TabContainer>}


                    {/* 
                        REGISTER
                    */}
                    {this.state.value === 1 && /*If value = 1, then render the following*/ 
                    <TabContainer >
                        <br/>
                        <FormControl required>
                            <InputLabel className = 'formContents' htmlFor = 'Name' >Name</InputLabel>
                            <Input type = 'text' id = 'Name' className = 'formContents' onChange = {this.setNameInStateReg}/>
                            <FormHelperText className = {this.state.nameRequiredReg}>required</FormHelperText>
                        </FormControl>
                        <br/>
                        <FormControl required>
                            <InputLabel className = 'formContents' htmlFor = 'Email' >Email ID</InputLabel>
                            <Input type = 'email' id = 'Email' className = 'formContents' onChange = {this.setEmailInStateReg}/>
                            <FormHelperText className = {this.state.emailRequiredReg}>required</FormHelperText>
                        </FormControl>
                        <br/>
                        <FormControl required>
                            <InputLabel htmlFor = 'userName' className = 'formContents'>Username</InputLabel>
                            <Input type = 'text' id = 'userName' className = 'formContents' onChange = {this.setUserNameInStateReg}/>
                            <FormHelperText className = {this.state.usernameRequiredReg}>required</FormHelperText>
                        </FormControl>
                        <br/>
                        <FormControl required>
                            <InputLabel className = 'formContents' htmlFor = 'Password' >Password</InputLabel>
                            <Input type = 'password' id = 'Password' className = 'formContents' onChange = {this.setPasswordInStateReg}/>
                            <FormHelperText className = {this.state.passwordRequiredReg}>required</FormHelperText>
                        </FormControl>
                        <br/>
                        <FormControl required>
                            <InputLabel className = 'formContents' htmlFor = 'ConfPassword' >Confirm Password</InputLabel>
                            <Input type = 'password' id = 'ConfPassword' className = 'formContents' onChange = {this.setConfirmPasswordInStateReg}/>
                            <FormHelperText className = {this.state.confirmPasswordRequiredReg}>required</FormHelperText>
                            <FormHelperText className = {this.state.passwordsMatchReg}>passwords don't match</FormHelperText>
                        </FormControl>
                        <br/><br/>
                        <Button variant = 'contained' color = "primary" className = 'submitBtn'
                        onClick = {this.registerFormIncomplete().bind(this)}>Register</Button>

                    </TabContainer>}

                </Modal>


            </div>
        )
    }
}

export default Header;