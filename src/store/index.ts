import { configureStore } from '@reduxjs/toolkit';
import calcSlice from './features/calcSlice';
import formSlice from './features/formSlice';
import menuSlice from './features/menuSlice';
import modePageSlice from './features/modePage';
import sidebarSlice from './features/sidebarSlice';

export const store = configureStore({
  reducer: {
    calc: calcSlice,
    menu: menuSlice,
    sidebar: sidebarSlice,
    form: formSlice,
    mode: modePageSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch