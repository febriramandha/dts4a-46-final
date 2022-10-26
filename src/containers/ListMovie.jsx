import tmdb from "../apis/tmdb";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Tooltip, Rating } from '@mui/material';
import ListSeries from "./ListSeries";

const ListMovie = () => {
    const [moviesPopuler, setMovies] = useState([]);

    useEffect(() => {
        const fetchDataMovies = async () => {
            try {
                // Gunakan instance tmdb di sini
                const responseDariTMDB = await tmdb.get(
                    // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
                    "/movie/popular"
                );

                // Jangan lupa set statenya
                // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
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
            <Box sx={{ pr: 2, color: 'white', textAlign: 'left', mt: 10 }}>
                <Typography gutterBottom variant="h6">
                    Popular
                </Typography>
            </Box>
            <Grid container wrap="nowrap" sx={{ mb: 5 }}>
                {moviesPopuler.map((movie) => {
                    return (
                        <Tooltip key={movie.id} title={movie.title}>
                            <Box sx={{ width: 210, marginRight: 0.5, }} >
                                <Rating
                                    value={movie.vote_average / 2}
                                    readOnly
                                />
                                <img
                                    style={{ width: 210, height: 300 }}
                                    alt='Don Diablo @ Tomorrowland Main Stage 2019'
                                    src={`${baseUrlForMovie}${movie.poster_path}`}
                                />
                            </Box>
                        </Tooltip>
                    )
                })};

            </Grid>

            <ListSeries />

            <Box sx={{ pr: 2, color: 'white', textAlign: 'left' }}>
                <Typography gutterBottom variant="h6">
                    Series
                </Typography>
            </Box>
            <Grid container wrap="nowrap" sx={{ mb: 5 }}>
                <Box sx={{ width: 210, marginRight: 0.5 }}>
                    <img
                        style={{ width: 210, height: 118 }}
                        alt='Don Diablo @ Tomorrowland Main Stage 2019 | Official…'
                        src='https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ'
                    />
                </Box>
                <Box sx={{ width: 210, marginRight: 0.5 }}>
                    <img
                        style={{ width: 210, height: 118 }}
                        alt='Queen - Greatest Hits'
                        src='https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA'
                    />
                </Box>
                <Box sx={{ width: 210, marginRight: 0.5 }}>
                    <img
                        style={{ width: 210, height: 118 }}
                        alt='Calvin Harris, Sam Smith - Promises (Official Video)'
                        src='https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw'
                    />
                </Box>
                <Box sx={{ width: 210, marginRight: 0.5 }}>
                    <img
                        style={{ width: 210, height: 118 }}
                        alt='Don Diablo @ Tomorrowland Main Stage 2019 | Official…'
                        src='https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ'
                    />
                </Box>
                <Box sx={{ width: 210, marginRight: 0.5 }}>
                    <img
                        style={{ width: 210, height: 118 }}
                        alt='Queen - Greatest Hits'
                        src='https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA'
                    />
                </Box>
                <Box sx={{ width: 210, marginRight: 0.5 }}>
                    <img
                        style={{ width: 210, height: 118 }}
                        alt='Calvin Harris, Sam Smith - Promises (Official Video)'
                        src='https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw'
                    />
                </Box>
                <Box sx={{ width: 210, marginRight: 0.5 }}>
                    <img
                        style={{ width: 210, height: 118 }}
                        alt='Don Diablo @ Tomorrowland Main Stage 2019 | Official…'
                        src='https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ'
                    />
                </Box>
                <Box sx={{ width: 210, marginRight: 0.5 }}>
                    <img
                        style={{ width: 210, height: 118 }}
                        alt='Queen - Greatest Hits'
                        src='https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA'
                    />
                </Box>
                <Box sx={{ width: 210, marginRight: 0.5 }}>
                    <img
                        style={{ width: 210, height: 118 }}
                        alt='Calvin Harris, Sam Smith - Promises (Official Video)'
                        src='https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw'
                    />
                </Box>
            </Grid>
        </>
    )
};

export default ListMovie;