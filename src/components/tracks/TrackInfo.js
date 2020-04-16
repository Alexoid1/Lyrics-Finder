import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {fetchSong,fetchInfo,setLoading} from '../../redux/actions/searchAction'
import Spinner from '../layout/Spinner'

export class TrackInfo extends Component {
    componentDidMount(){
        this.props.fetchSong(this.props.match.params.id)
        this.props.fetchInfo(this.props.match.params.id) // se obtiene la id de la url q se uso el request  asi q se tiene q verificar si la id es la misma en ambos request
        this.props.setLoading()

        
       

        
        
    }
    
    
      

        
        
    

    
    render() {
        const { song,info,loading } = this.props;
        //console.log(song)
        //console.log(info)
        
        let songInfo=(<div>
            <Link to="/" className="btn btn-dark btn-sm mb-4">
                Go Back
            </Link>
          
            <div className="card">
                <h5 className="card-header text-dark">
                    {info.track_name} ({info.album_name}) by{' '}
                    <span className="text-secondary">{info.artist_name }</span>
                </h5>
                
                <div className="card-body bg-dark text-light">
                    <p className="card-text">{song.lyrics_body}</p>
                </div>
            </div>
            <ul className="list-group mt-3">
                <li className="list-group-item">
                    <strong>Album ID</strong>: {info.album_id}
                </li>
                
                
                
            </ul>    
    
          
        </div>)
        let content = loading ? <Spinner/> : songInfo;
        
        return (<div>{content}</div>)
    }
}
const mapStateToProps=state=>({
    
    song:state.songs.song,     //se les asigna el nombre q se les dio en el reducers
    info:state.songs.info,
    loading:state.songs.loading,
    
    
   
})
export default connect(mapStateToProps,{fetchSong,fetchInfo,setLoading})(TrackInfo)


