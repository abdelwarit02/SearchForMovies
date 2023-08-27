import React, { useState } from 'react';
import { useEffect } from 'react';
import MoviesCard from './MoviesCard';
import SearchIcon from './search.svg'



//6d053f25



function App() {
    const [searchItem, setSearchItem] = useState("spiderman")
    const [movies, setMovies] = useState([])


    const ApiUrl = 'http://omdbapi.com?apikey=6d053f25'
    const searchMovie = async(title) => {
        if (title !== "") {
            const response = await fetch(`${ApiUrl}&s=${title}`)
            const data = await response.json();
            setMovies(data.Search)
        } else {
            alert('write a movie name please')
        }



    }
    useEffect(() => {
        searchMovie(searchItem)


    }, [])


    return ( <
        div className = "App" >
        <
        h1 > Movie Land < /h1> <
        div className = "search" >
        <
        input placeholder = "search"
        value = { searchItem }
        onChange = {
            (e) => setSearchItem(e.target.value) }
        /> <
        img src = { SearchIcon }
        alt = "search"
        onClick = {
            () => searchMovie(searchItem) }
        /> <
        /div> {
            movies.length > 0 ? ( <
                div className = "container" > {
                    movies.map((movie) => ( <
                        MoviesCard movie = { movie }
                        />
                    ))
                } <
                /div>
            ) : ( <
                div className = "empty" >
                <
                h1 > No Movies Found < /h1> <
                /div>
            )
        } <
        /div>
    );

}

export default App;