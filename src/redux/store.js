import {postApi} from "./api/postAPI";

export const server = import.meta.env.VITE_SERVER

export const store = configureStore({
    reducer: {
        [postApi.reducerPath] : postApi.reducer,
    },
    middleware: (mid) => [...mid() , postAPI.middleware ],
});

