import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom'
import api from "../../API/token";

const URL = "https://api.spotify.com";

const myHeaders = new Headers();
myHeaders.append("Authorization",`${api.token}`);

const requestOpt = {
    method : 'GET',
    headers : myHeaders,
    redirect : 'follow'
};


function Track(props) {
    const[track,setTrack] = useState([]);
    const[audio,setAudio] = useState(null);
    const[playing,setPlaying] = useState(false);
    const[playUrl,setPlayUrl] = useState(null);


    const params = useParams();
    console.log('params =>',params)

    const getTracks = ()=>{
        fetch(`${URL}/v1/artists/${params.id}/top-tracks?market=IN`,requestOpt)
            .then(response=>response.json())
            .then(res=>{
                console.log('Tracks=',res.tracks);
                setTrack(res.tracks);
            })
            .catch(err=>console.log(err.message));
    };
    useEffect(()=>{
        getTracks();
    },[]);

    // audio track controls
    const trackIcon = (url)=>{
        if(!url){
            return<span className="text-danger">No Tracks</span>
        }
        if(playing && playUrl === url){
            return <button className="btn btn-sm btn-warning">pause</button>
        }
        return <button className="btn btn-sm btn-info">Play</button>
    }

    // play audio

    const playAudio = (url)=>{
        const myAudio = new Audio(url);
        if(!playing){
            myAudio.play();
            setPlaying(true);
            setAudio(myAudio);
            setPlayUrl(url);
        }else{
            audio.pause();//state
            if(playUrl=== url){
                setPlaying(false);
            }else{
                myAudio.play();
                setAudio(myAudio);
                setPlayUrl(url);
            }
        }
    }









    
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3">Tracks</h3>
            </div>
        </div>

        <div className="row">
            {
                track.map((item,key)=>{
                    const{name,album,preview_url} = item;
                    return(
                        <div className="col-md-4 mt-2" key={key} onClick={()=>playAudio(preview_url)}>
                            <div className="card">
                                <img src={album.images[1].url} alt={name} className="card-img-top"/>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <strong className="text-center">{name}</strong>

                                        </li>

                                    </ul>

                                </div>
                                <div className="card-footer">
                                    {trackIcon(preview_url)}

                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    </div>

    )
   
}
export default Track;