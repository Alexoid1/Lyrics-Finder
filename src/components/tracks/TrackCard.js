import React from 'react'
import {Link} from 'react-router-dom'

const TrackCard = props => {
    const { song } = props;
    return(
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                <h5>{song.artist_name}</h5>
                <p className="card-text">
                    <strong>
                    <i className="fa fa-play" /> Track
                    </strong>
                    : {song.track_name}
                    <br />
                    <strong>
                    <i className="fa fa-dot-circle-o" /> Album
                    </strong>
                    : {song.album_name}
                </p>
                    <Link to={'/song/'+song.track_id} >
                        <i className="fa fa-chevron-right" /> View Lyrics
                    </Link>
                
                    
                
                </div>
            </div>
        </div>

    )
}
export default TrackCard;

