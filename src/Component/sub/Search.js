import React, { useState } from "react";



function  Search(props) {
    const [artist,setArtist] = useState("");

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log('artist=',artist);
        props.Search(artist)

    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <form action="" onSubmit={(event)=>submitHandler(event)}>
                        <div className="form-group mt-2 mb-2">
                            <div className="input-group">
                                <input type="search" name="artist" id="artist" value={artist} onChange={(e)=>setArtist(e.target.value)} className="form-control" placeholder="Enter Artist Name" required/>
                                <input type="submit" value="search" className ="btn btn-success" />

                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default Search;
