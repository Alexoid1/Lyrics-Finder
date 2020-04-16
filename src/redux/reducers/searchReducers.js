import {SEARCH_SONGS,FETCH_SONGS,FETCH_SONG,FETCH_INFO,LOADING} from '../actions/types'
const initialState ={
    text:'',
    songs:[],
    loading:false,
    song:[],
    info:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case SEARCH_SONGS:
            return {
                ...state,
                text:action.payload,
                loading:false
            }
        case FETCH_SONGS:
            return {
                ...state,
                songs:action.payload,   
                loading:false          
            }
        case FETCH_SONG:
            return {
                ...state,
                song:action.payload,
                loading:false             
            }
        case FETCH_INFO:
            return {
                ...state,
                info:action.payload,
                loading:false             
            }
        case LOADING:
            return {
                ...state,
                loading:true             
            }
        default:
            return state    
    }

}