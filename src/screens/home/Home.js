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
import { Card } from '@material-ui/core';
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
// import { FormControlLabel } from '@material-ui/core';
// import { Checkbox } from '@material-ui/core';
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
        };
    }

    movieNameChangeHandler = (e) => {
        this.setState({ movieName: e.target.value });
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
                            <FormControl className={classes.formControl}>
                                <Typography component='div' className={classes.title}>
                                    Search for movies by :
                                </Typography>
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor='movieName'>Movie Name </InputLabel>
                                <Input id='movieName' onChange={this.movieNameChangeHandler}></Input>
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor='movieGenre'>Movie Genre </InputLabel>
                                <Select id='movieGenre' onChange={this.movieNameChangeHandler}>
                                    {/* <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem> */}
                                    {/* <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem> */}
                                    <MenuItem aria-label='None' value={''}><em>None</em></MenuItem>
                                    {genres.map(genre =>
                                        <MenuItem value={genre.id}>
                                            {genre.name}
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor='movieGenre'>Artist Name </InputLabel>
                                <Select id='movieGenre' onChange={this.movieNameChangeHandler}>
                                    {/* <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem> */}
                                    {/* <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem> */}
                                    <MenuItem aria-label='None' value={''}><em>None</em></MenuItem>
                                    {artists.map(artist =>
                                        <MenuItem value={artist.id}>{artist.first_name + ' '
                                            + artist.last_name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>

                        </CardContent>
                    </Card>
                </div>



            </div>
        )
    }
}


export default withStyles(styles)(Home);