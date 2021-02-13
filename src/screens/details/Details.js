import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import moviesData from '../../assets/MovieData.js';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import Home from '../home/Home';
import YouTube from 'react-youtube';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];
        this.setState({ currentState });
        console.log(this.state);
    }

    backToHomeHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        let currentMovie = this.state.movie;
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
        return (
            <div className="details">
                <Header />
                <div className="back">
                    <Typography onClick={this.backToHomeHandler}>
                        &#60; Back to Home
                        </Typography>
                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={currentMovie.poster_url} alt={currentMovie.title} />
                    </div>

                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{currentMovie.title} </Typography>
                        </div>
                        <br />
                        <div>
                            <Typography>
                                <span className="bold">Genres: </span> {currentMovie.genres.join(', ')}
                            </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Duration:</span> {currentMovie.duration} minutes</Typography> 
                        </div>
                        <div>
                            <Typography><span className="bold">
                                Release Date:</span> {new Date(currentMovie.release_date).toDateString()} 
                            </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold"> Rating:</span> {currentMovie.critics_rating}  </Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography><span className="bold">Plot:</span> <a href={currentMovie.wiki_url}>(Wiki Link)</a> 
                            {currentMovie.storyline} </Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography>
                                <span className="bold">Trailer:</span>
                            </Typography>
                            <YouTube
                                videoId={currentMovie.trailer_url.split("?v=")[1]}
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>

                    <div className="rightDetails">

                    </div>
                </div>
            </div>
        )
    }
}

export default Details;