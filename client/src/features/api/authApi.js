//helps define an api slice
//fetchBaseQuery → A simple way to make API requests
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//redux actions imported from authSlice
import { userLoggedIn, userLoggedOut } from "../authSlice";

const USER_API = "http://localhost:8080/api/v1/user/"

export const authApi = createApi({

    //reducerPath: "authApi" → This is the key in Redux where this API slice’s state is stored.
    reducerPath: "authApi",

    baseQuery: fetchBaseQuery({
        baseUrl: USER_API,
        //ensures cookies are sent with requests
        credentials: 'include'
    }),
//send request
//The request is sent to http://localhost:8080/api/v1/user/register.
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url: "register",
                method: "POST",
                body: inputData
            })
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url: "login",
                method: "POST",
                body: inputData
            }),

            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    //result will contain server response
                    const result = await queryFulfilled;
                    //result will be of the form (if successful login else it will be redirected to catch block)
                    //   "data": {
                    //     "success": true,
                    //     "message": "Login successful",
                    //     "user": {
                    //       "_id": "65d1f8b69a1a2b0012345678",
                    //       "name": "John Doe",
                    //       "email": "johndoe@example.com",
                    //       "role": "student",
                    //       "enrolledCourses": [],
                    //       "photoUrl": "",
                    //       "createdAt": "2024-03-19T12:00:00.000Z",
                    //       "updatedAt": "2024-03-19T12:00:00.000Z",
                    //       "__v": 0

                    dispatch(userLoggedIn({ user: result.data.user }));
                } 
                catch (error) {
                    console.log(error);
                }
            }
        }),



    })
});


//useRegisterUserMutation → A React hook to call the registerUser API.
//useLoginUserMutation → A React hook to call the loginUser API.
export const {
    useRegisterUserMutation,
    useLoginUserMutation,
} = authApi;