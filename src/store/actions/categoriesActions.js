import {GET_CATEGORIES, CATEGORIES_ERROR} from '../type'
import axios from 'axios'

export const getCategories = () => async dispatch => {


    try{
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://git.bigbek.com/-/snippets/2/raw/master/tv_show_list.json`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
        dispatch( {
            type: GET_CATEGORIES,
            payload: res.data,
            crossorigin : true
        })
        // console.log(res)
    }
    catch(e){
        dispatch( {
            type: CATEGORIES_ERROR,
            payload: console.log(e),
        })
    }

}