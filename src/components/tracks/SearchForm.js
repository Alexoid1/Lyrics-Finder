
import React, { Component } from 'react'
import {searchSongs,fetchSongs,setLoading} from '../../redux/actions/searchAction'
import {connect} from 'react-redux'

export class SearchForm extends Component {
    onChange=e=>{
        this.props.searchSongs(e.target.value)

    }
    onSubmit=e=>{
        e.preventDefault();
        this.props.fetchSongs(this.props.text)
       // console.log('onsubbmit working')
       

    }
    render() {
        return (
            <div className="card card-body mb-4 p-4">
                <h1 className="display-4 text-center">
                    <i className="fa fa-play-circle" aria-hidden="true" /> Search For A Song
                </h1>
                <p className="lead text-center">Get the lyrics for any song</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Song title..."
                        name="userInput"
                        
                        onChange={this.onChange}
                        />
                    </div>
                    <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
                        Get Track Lyrics
                    </button>
                </form>
          </div>
        )
    }
}

const mapStateToProps =state=>({
    text:state.songs.text
})
export default connect(mapStateToProps,{searchSongs,fetchSongs,setLoading})(SearchForm)