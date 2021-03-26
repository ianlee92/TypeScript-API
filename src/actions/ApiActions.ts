import axios from 'axios';
import {Dispatch} from 'redux';
import {CatDispatchType, API_SUCCESS, API_FAIL} from './ApiActionTypes';

export const fetchApiData = () => async (dispatch:Dispatch<CatDispatchType>) => {
    try {
        const res = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=gif')
        const data = res.data

        dispatch({
            type: API_SUCCESS,
            payload: data[0]
        })

    } catch (err) {
        dispatch({
            type: API_FAIL
        })
    }
}