export const API_SUCCESS = 'API_SUCCESS'
export const API_FAIL = 'API_FAIL'

export type CatType = {
    url: any
}

export interface apiFailDispatch {
    type: typeof API_FAIL
}

export interface apiSuccessDispatch {
    type: typeof API_SUCCESS
    payload: {
        url: CatType
    }
}

export type CatDispatchType = apiFailDispatch | apiSuccessDispatch