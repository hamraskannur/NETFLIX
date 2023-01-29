import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl} from "../../constants/constants"
import axios from "../../axios"
import "./Banner.css"
function Banner() {
     const [Movie , setMovie] =useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            const movie_num = Math.floor(Math.random() * response.data.results.length);
            setMovie(response.data.results[movie_num])
        })
    },[])
    return (
        <div 
        style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path:""})`}}
         className='Banner'>

            <div className='content'>
                <h1 className='title'>{Movie ? Movie.title:""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{Movie ? Movie.overview:""}</h1>
                <div className='fade_bottom'></div>

            </div>
        </div>
    )
}

export default Banner
