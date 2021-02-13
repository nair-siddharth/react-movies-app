import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';


import moviesData from '../../assets/MovieData';
import genres from '../../assets/genres';
import artists from '../../assets/artists';

// Grid of movies
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

// Search Card
import { Card, TextField } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

// Search Form
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Typography } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
// import { CheckBoxOutlineBlankIcon } from '@material-ui/icon';
// import { CheckBoxIcon } from '@material-ui/icons';



const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%',
        height: '40vh'
    },
    formControl: {
        margin: 5,//theme.spacing(5),
        minWidth: 240,
        // maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});

class Home extends Component {

    constructor() {
        super();
        this.state = {
            movieName: '',
            genres : [],
            artists:[],
        };
    }

    movieNameChangeHandler = (e) => {
        this.setState({ movieName: e.target.value });
        console.log(this.state);
    }

    moviGenreChangeHandler = (e) => {
        this.setState({ genres: e.target.value });
    }

    movieArtistChangeHandler = (e) => {
        this.setState({ artists: e.target.value });
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                {/*Upcoming movies*/}
                <GridList className={classes.gridListUpcomingMovies} cols={5} cellHeight={'auto'} spacing={1}>
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id}>
                            <img src={movie.poster_url} alt={movie.title} />
                            <GridListTileBar title={movie.title} />
                        </GridListTile>
                    ))}
                </GridList>

                {/*All released movies*/}

                <div className='catalogContainer'>
                    <div className='allMoviesGrid'>
                        <GridList cols={3} cellHeight={'auto'} spacing={35}>
                            {moviesData.map(movie => (

                                <GridListTile key={movie.id}>
                                    <img src={movie.poster_url} alt={movie.title} />
                                    <GridListTileBar title={movie.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>

                    <Card className='searchForm'>
                        <CardContent className='searchCard'>

                            {/**Movie Name */}
                            <FormControl className={classes.formControl}>
                                <Typography component='div' className={classes.title}>
                                    Search for movies by :
                                </Typography>
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor='movieName'>Movie Name </InputLabel>
                                <Input id='movieName' onChange={this.movieNameChangeHandler}></Input>
                            </FormControl>

                            {/**Genre */}
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor='movieGenre'>Movie Genre </InputLabel>
                                <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox-genre" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.moviGenreChangeHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(genre => (
                                            <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                <ListItemText primary={genre.name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                            </FormControl>


                            {/**Artist */}
                            <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.movieArtistChangeHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                                                <ListItemText primary={artist.first_name + " " + artist.last_name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                {/**Release date from */}
                                <FormControl className={classes.formControl}>
                                    <TextField id = 'releaseDateFrom' label = 'Release date from' type = 'date' defaultValue = ''
                                    InputLabelProps = {{shrink:true}}/>
                                </FormControl>

                                {/**Release date to */}
                                <FormControl className={classes.formControl}>
                                    <TextField id = 'releaseDateTo' label = 'Release date to' type = 'date' defaultValue = ''
                                    InputLabelProps = {{shrink:true}}/>
                                </FormControl>


                        </CardContent>
                    </Card>
                </div>



            </div>
        )
    }
}


export default withStyles(styles)(Home);