import React, { Component } from 'react';
import './BookShow.css';
import Header from '../../common/header/Header';
import Home from '../../screens/home/Home';
import MovieData from '../../assets/MovieData';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';




class BookShow extends Component{


    // homeNavHandler = () => {
    //     ReactDOM.render(<Home />, document.getElementById('root'));
    // }


    render(){
        let movieID = localStorage.getItem('selectedMovieID');
        return(
        <div>
            
            <Header homeBtn = {true} bookShowBtn = {false}/>
            {/* Booking Page */}
            {/* <p>Movie ID = {movieID}</p> */}
            {/* <Button color="primary" variant="contained" onClick={this.homeNavHandler}>Home</Button> */}
            <h2>
                {
                    MovieData.filter(movie => movie.id === movieID)[0].title
                }
            </h2>

        </div>
        )
        
    }
}


export default BookShow