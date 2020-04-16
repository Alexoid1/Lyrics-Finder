import {SEARCH_SONGS,FETCH_SONGS,FETCH_SONG,FETCH_INFO,LOADING} from './types'
import axios from 'axios'

export const searchSongs=text=>dispatch=>{
    dispatch({
        type:SEARCH_SONGS,
        payload:text
    })
}
export const fetchSongs=text=>dispatch=>{

    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${text}&page_size=20&page=1&s_track_rating=desc&apikey=b3688c66a0606c63667e95d4b741f1e5`).then(response=>dispatch({
        type:FETCH_SONGS,
        payload:response.data.message.body.track_list   //la profundidad de detalle en el API  se lo especifica en la ccion por que en los resultados solo se puede especificar dos
    }))
    .catch(err=> console.log(err))
    

}
export const fetchSong =id=>dispatch=>{
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=b3688c66a0606c63667e95d4b741f1e5`).then(response=>dispatch({ 
        type:FETCH_SONG,
        payload:response.data.message.body.lyrics
    }))
    .catch(err=> console.log(err))
} 
export const fetchInfo =id=>dispatch=>{
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=b3688c66a0606c63667e95d4b741f1e5`).then(response=>dispatch({ 
        type:FETCH_INFO,
        payload:response.data.message.body.track
    }))
    .catch(err=> console.log(err))
} 
export const setLoading=()=>{
    return{
        type:LOADING
    }
}
