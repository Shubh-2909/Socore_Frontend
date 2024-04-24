import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000/api/v1/tweets/`,
    }),
    endpoints: (builder) => ({
        newPost:builder.mutation({
            query:(post) => ({
                url : "new",
                method:"POST",
                body:post
            }),
        }),
        updatePost:builder.mutation({
            query:({userId , orderId}) => ({
                url : `${orderId}?id=${userId}`,
                method:"PUT",
            }),
        }),
        deletePost:builder.mutation({
            query:({userId , orderId}) => ({
                url : `${orderId}?id=${userId}`,
                method:"DELETE",
            }),
        }),
        myPost:builder.query({
            query:(id) => `my?id=${id}`,
        }),
        allPosts:builder.query({
            query:(id) => `all?id=${id}`,
        }),
        postDetails:builder.query({
            query:(id) => id,
        }) 
    }),
})


export const  {useAllPostsQuery , } = postApi;
