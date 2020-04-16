import React, { Component } from 'react'
import {connect} from 'react-redux'
import Tracks from '../tracks/Tracks'
import SearchForm from '../tracks/SearchForm'
import Spinner from './Spinner'

 
export class Index extends Component {
    render() {
        const {loading}=this.props;
        return (
            <div>
              <SearchForm/>
              {loading ? <Spinner/>:<Tracks />}
            </div>
        )
    }
}
 


const mapStateToProps=state=>({
    loading:state.songs.loading
})

export default connect(mapStateToProps)(Index)
 
