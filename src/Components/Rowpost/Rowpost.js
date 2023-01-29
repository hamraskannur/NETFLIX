import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from "../../axios"
import { imageUrl, API_KEY } from "../../constants/constants"


function Rowpost(props) {
    const [Movies, setMovies] = useState([])
    const [urlid, seturlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const handeMovie = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.lenght !== 0) {
                seturlId(response.data.results[0])
            } else {
                   
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {Movies.map((obj) =>
                    <img onClick={() => handeMovie(obj.id)} className={props.issmal ? "smallposter" : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt='poster'></img>

                )}
            </div>
           {urlid && <Youtube opts={opts} videoId={urlid.key}/>}
        </div>
    )
}

export default Rowpost
