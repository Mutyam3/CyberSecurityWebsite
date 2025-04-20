import {configureStore} from '@reduxjs/toolkit'
import { HomeApi } from '../services/HomeApi'
import { getDefaultNormalizer } from '@testing-library/dom'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({

    
    reducer : {
        

        [HomeApi.reducerPath] : HomeApi.reducer

    },

    middleware : (getDefaultMiddleware)=>
          getDefaultMiddleware().concat(HomeApi.middleware)

})

setupListeners(store.dispatch)