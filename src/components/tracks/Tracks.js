import React, { Component } from 'react'
import {connect} from 'react-redux'
import TrackCard from './TrackCard'

export class Tracks extends Component {
    render() {
        const {songs}=this.props;
        let content='';
        
        content=songs.length > 0 ? songs.map((song)=><TrackCard key={song.track.track_id} song={song.track}/>):console.log('no funciona tracks');
       
        //console.log(songs.length)  
       
        return (
        <div>
            <h3 className="text-center mb-4 text-light">heading</h3>
            
            <div className="row">{content}</div>

        </div>
        
        )
    }
}

const mapStateToProps=state=>({
    songs:state.songs.songs
})
export default connect(mapStateToProps)(Tracks) 