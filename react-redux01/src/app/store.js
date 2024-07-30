import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "../components/posts/postsSlice";
import usersSliceReducer from "../components/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    users: usersSliceReducer,
  },
});
