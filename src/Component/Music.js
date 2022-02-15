import React,{useEffect,useState}from "react";
import api from "../API/token";
import Artist from "./sub/Artist";
import Search from './sub/Search'

// HOST url
const URL = "https://api.spotify.com";

// Create headers
const myHeaders = new Headers();
myHeaders.append("Authorization",`${api.token}`);

const reqOptions = {
    method : 'GET',
    headers : myHeaders,
    redirect : 'follow'
};

function Music(props){
    const [artist,setArtist] = useState([]);


    // call api

    const getArtists = (artistname)=>{
        fetch(`${URL}/v1/search?q=${artistname}&type=artist`,reqOptions)
            .then(response=>response.json())
            .then(res=>{
                console.log('artist data =',res.artists.items);
                setArtist(res.artists.items);
            }).catch(err => console.log(err.message));
    };
    // useEffect(()=>{
    //     // getArtists('GV PRAKASH')
    // },[]);
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">
                        Music
                    </h3>

                </div>

            </div>
            <div className="row">
                <Search Search={getArtists}/>

            </div>
            <div className="row">
                {
                    artist.map((item,key)=>{
                        return <Artist key={key}{...item}/>
                    })

                }

            </div>

        </div>
    )
}
export default Music;