import tmdbseries from "../apis/tmdbseries";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

const ListSeries = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchDataMovies = async () => {
            try {
                const responseDariTMDB = await tmdbseries.get(
                    "trending/all/day?"
                );

                setMovies(responseDariTMDB.data.results);
            } catch (err) {
                console.log(err);
            }
        };

        fetchDataMovies();
    }, []);

    const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
    return (
        <>
            <h1 style={{ color: 'white', marginTop: 100 }}>List Series Movie</h1>

            <ImageList sx={{ width: '100%', height: 'auto', overflow: 'hidden' }} cols={7} >
                {movies.map((movie) => (
                    <ImageListItem key={movie.id}>
                        <Link to={`/detail/${movie.id}`} style={{ textDecoration: "none" }}>
                            <img
                                style={{ width: 210, height: 300 }}
                                src={`${baseUrlForMovie}${movie.poster_path}`}
                                alt={movie.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                sx={{ width: 210, mb: 2, color: 'white', pb: 2 }}
                                title={movie.title}
                            />
                            <Rating
                                sx={{ mb: 2 }}
                                value={movie.vote_average / 2}
                                readOnly
                            />
                        </Link>
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
};

export default ListSeries;