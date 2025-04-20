import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const HomeApi = createApi({

        reducerPath : 'CricketApi',
        baseQuery : fetchBaseQuery({
            baseUrl : 'http://localhost:5000'
        }),

        endpoints : (builder)=>({

            getTeamsLogos : builder.query({
                query : () => '/teamLogos'
            }),

            getcyberSecurityServices : builder.query({
                 query : () => '/cyberSecurityServices'

            })
        })

})

export const {useGetTeamsLogosQuery, useGetcyberSecurityServicesQuery} = HomeApi

