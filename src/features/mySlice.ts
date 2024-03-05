import { combineReducers, createSlice } from "@reduxjs/toolkit";

const followersSlice = createSlice({
    name: 'followers',
    initialState: 0,
    reducers: {
        addFolowers: (state, action) => {
            return state + action.payload;
        },
        minusFolowers: (state, action) => {
            const res = state - action.payload;
            return res < 0 ? state : res;
        }
    }
})

const followingSlice = createSlice({
    name: 'following',
    initialState: 0,
    reducers: {
        addFolowing: (state, action) => {
            return state + action.payload;
        },
        minusFolowing: (state, action) => {
            const res = state - action.payload;
            return res < 0 ? state : res;
        }
    }
})



export const {addFolowers, minusFolowers} = followersSlice.actions;
export const {addFolowing, minusFolowing} = followingSlice.actions;
export default followersSlice.reducer;


